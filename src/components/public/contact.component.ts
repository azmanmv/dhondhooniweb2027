import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-center text-4xl font-extrabold text-gray-900 mb-12">Contact Us</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Form -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">Name</label>
                <input formControlName="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" placeholder="Your Name">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                <input formControlName="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Your Email">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="phone">Phone</label>
                <input formControlName="phone" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" id="phone" placeholder="Your Phone">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="message">Message</label>
                <textarea formControlName="message" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4" placeholder="How can we help?"></textarea>
              </div>
              
              @if (submitted) {
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you! We will get back to you soon.
                </div>
              }

              <button type="submit" [disabled]="contactForm.invalid || submitted" class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
                Send Message
              </button>
            </form>
          </div>

          <!-- Info & Map -->
          <div class="space-y-8">
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-6">Contact Info</h2>
              <ul class="space-y-4 text-gray-700">
                <li class="flex items-start">
                  <span class="mr-3 text-blue-500 text-xl">📍</span>
                  <span>{{ dataService.content().contact.address }}</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-blue-500 text-xl">📞</span>
                  <span>{{ dataService.content().contact.phone }}</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-blue-500 text-xl">✉️</span>
                  <span>{{ dataService.content().contact.email }}</span>
                </li>
              </ul>
              
              <div class="mt-8">
                <h3 class="font-bold mb-2">Hours of Operation</h3>
                <p class="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p class="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center overflow-hidden">
               <img src="https://picsum.photos/id/120/800/400" alt="Map Location" class="w-full h-full object-cover opacity-80">
               <div class="absolute bg-white/80 p-2 rounded shadow text-sm font-bold">Map Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  dataService = inject(DataService);
  fb: FormBuilder = inject(FormBuilder);
  submitted = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted = true;
      // In a real app, send to backend
      setTimeout(() => this.submitted = false, 3000);
      this.contactForm.reset();
    }
  }
}