import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-extrabold text-gray-900">Parent Resources & Blog</h1>
          <p class="mt-4 text-xl text-gray-500">Tips, news, and insights for our community.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of dataService.blogPosts(); track post.id) {
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" [src]="post.image" [alt]="post.title">
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-blue-600">
                    Resources
                  </p>
                  <div class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                    <p class="mt-3 text-base text-gray-500">{{ post.excerpt }}</p>
                  </div>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <span class="sr-only">Dhondhooni Team</span>
                    <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      DL
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Dhondhooni Team</p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time>{{ post.date }}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class BlogComponent {
  dataService = inject(DataService);
}