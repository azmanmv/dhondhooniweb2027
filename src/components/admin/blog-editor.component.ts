import { Component, inject } from '@angular/core';
import { DataService, BlogPost } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-editor',
  standalone: true,
  imports: [FormsModule, DatePipe],
  template: `
    <div class="space-y-6">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">Create New Post</h2>
        <form (ngSubmit)="addPost()">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" [(ngModel)]="newPost.title" name="title" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Excerpt</label>
              <input type="text" [(ngModel)]="newPost.excerpt" name="excerpt" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Content</label>
              <textarea [(ngModel)]="newPost.content" name="content" rows="4" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
            <div>
               <label class="block text-sm font-medium text-gray-700">Image URL (Placeholder)</label>
               <input type="text" [(ngModel)]="newPost.image" name="image" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
          </div>
          <button type="submit" class="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Publish Post</button>
        </form>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold mb-4">Existing Posts</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              @for (post of dataService.blogPosts(); track post.id) {
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ post.title }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ post.date | date }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button (click)="deletePost(post.id)" class="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class BlogEditorComponent {
  dataService = inject(DataService);

  newPost: Partial<BlogPost> = {
    title: '',
    excerpt: '',
    content: '',
    image: 'https://picsum.photos/id/100/800/400'
  };

  addPost() {
    if (!this.newPost.title || !this.newPost.content) return;
    
    const post: BlogPost = {
      id: Date.now(),
      title: this.newPost.title!,
      excerpt: this.newPost.excerpt || '',
      content: this.newPost.content!,
      date: new Date().toLocaleDateString(),
      image: this.newPost.image || 'https://picsum.photos/id/101/800/400'
    };

    this.dataService.addBlogPost(post);
    
    // Reset form
    this.newPost = {
      title: '',
      excerpt: '',
      content: '',
      image: 'https://picsum.photos/id/100/800/400'
    };
  }

  deletePost(id: number) {
    if(confirm('Are you sure you want to delete this post?')) {
      this.dataService.deleteBlogPost(id);
    }
  }
}