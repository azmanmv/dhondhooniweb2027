import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from '../ui/navbar.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col bg-gray-50">
      <app-navbar></app-navbar>
      
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>

      <footer class="bg-blue-100 pt-16 pb-8 border-t-8 border-yellow-300 relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply opacity-50"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply opacity-50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 class="text-2xl font-extrabold mb-4 display-font text-blue-900">Dhondhooni Little Learners</h3>
              <p class="text-blue-800 mb-6 font-medium">{{ dataService.content().home.heroSubtitle }}</p>
              <div class="flex space-x-4">
                <!-- Social Icons -->
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-200 cursor-pointer shadow-md text-blue-600 font-bold text-xl transition-colors">F</div>
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-200 cursor-pointer shadow-md text-pink-600 font-bold text-xl transition-colors">I</div>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-6 display-font text-blue-900">Quick Links</h3>
              <ul class="space-y-3 text-blue-800 font-semibold">
                <li><a routerLink="/about" class="hover:text-pink-600 transition-colors flex items-center">✨ About Us</a></li>
                <li><a routerLink="/programs" class="hover:text-green-600 transition-colors flex items-center">🎨 Our Programs</a></li>
                <li><a routerLink="/admissions" class="hover:text-yellow-600 transition-colors flex items-center">📚 Admissions</a></li>
                <li><a routerLink="/blog" class="hover:text-purple-600 transition-colors flex items-center">📝 Parent Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-6 display-font text-blue-900">Contact Info</h3>
              <ul class="space-y-4 text-blue-800 font-medium bg-white p-6 rounded-[2rem] shadow-sm border-2 border-blue-200">
                <li class="flex items-start">
                  <span class="mr-2">📍</span> 
                  <span>{{ dataService.content().contact.address }}</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-2">📞</span> 
                  <span>{{ dataService.content().contact.phone }}</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-2">✉️</span> 
                  <span>{{ dataService.content().contact.email }}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-12 pt-8 text-center text-blue-800 font-medium">
            &copy; 2023 Dhondhooni Little Learners. All rights reserved. <a routerLink="/login" class="hover:text-pink-600 ml-2 font-bold underline decoration-pink-300 decoration-2">Admin Login</a>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class PublicLayoutComponent {
  dataService = inject(DataService);
}