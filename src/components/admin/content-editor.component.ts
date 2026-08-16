import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-editor',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="bg-white rounded-lg shadow p-8">
      <h2 class="text-2xl font-bold mb-6">Edit Page Content</h2>
      
      <div class="space-y-8">
        <!-- Home Section -->
        <div>
          <h3 class="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Home Page - Hero</h3>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Hero Title</label>
              <input type="text" [(ngModel)]="home.heroTitle" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Hero Subtitle</label>
              <textarea [(ngModel)]="home.heroSubtitle" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
          </div>
          <button (click)="saveHome()" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Home Changes</button>
        </div>

        <!-- About Section -->
        <div>
          <h3 class="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">About Us</h3>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Our History</label>
              <textarea [(ngModel)]="about.history" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
             <div>
              <label class="block text-sm font-medium text-gray-700">Our Mission</label>
              <textarea [(ngModel)]="about.mission" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
          </div>
          <button (click)="saveAbout()" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save About Changes</button>
        </div>

        <!-- Contact Section -->
        <div>
           <h3 class="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Contact Info</h3>
           <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <label class="block text-sm font-medium text-gray-700">Email</label>
               <input type="text" [(ngModel)]="contact.email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
             </div>
             <div>
               <label class="block text-sm font-medium text-gray-700">Phone</label>
               <input type="text" [(ngModel)]="contact.phone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
             </div>
             <div class="md:col-span-2">
               <label class="block text-sm font-medium text-gray-700">Address</label>
               <input type="text" [(ngModel)]="contact.address" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
             </div>
           </div>
           <button (click)="saveContact()" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Contact Changes</button>
        </div>
      </div>
    </div>
  `
})
export class ContentEditorComponent {
  dataService = inject(DataService);
  
  // Create local copies to bind to form, so we don't update signal immediately (wait for save)
  home = { ...this.dataService.content().home };
  about = { ...this.dataService.content().about };
  contact = { ...this.dataService.content().contact };

  saveHome() {
    this.dataService.updateContent('home', this.home);
    alert('Home content updated!');
  }

  saveAbout() {
    this.dataService.updateContent('about', this.about);
    alert('About content updated!');
  }

  saveContact() {
    this.dataService.updateContent('contact', this.contact);
    alert('Contact info updated!');
  }
}