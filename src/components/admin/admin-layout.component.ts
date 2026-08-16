import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-gray-100 flex">
      <!-- Sidebar -->
      <div class="bg-gray-900 text-white w-64 flex-shrink-0 flex flex-col transition-all duration-300">
        <div class="p-6">
          <h1 class="text-xl font-bold tracking-wider">DASHBOARD</h1>
          <p class="text-gray-500 text-sm mt-1">Dhondhooni Preschool</p>
        </div>
        
        <nav class="flex-1 px-4 space-y-2 mt-4">
          <a routerLink="/admin/dashboard" routerLinkActive="bg-gray-800 text-white" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
            <span class="mr-3">📊</span> Overview
          </a>
          <a routerLink="/admin/content" routerLinkActive="bg-gray-800 text-white" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
            <span class="mr-3">📝</span> Edit Content
          </a>
          <a routerLink="/admin/blog" routerLinkActive="bg-gray-800 text-white" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
            <span class="mr-3">📰</span> Blog Posts
          </a>
          <a routerLink="/admin/settings" routerLinkActive="bg-gray-800 text-white" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
            <span class="mr-3">⚙️</span> Settings
          </a>
          <a routerLink="/" target="_blank" class="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors mt-8 border-t border-gray-700">
            <span class="mr-3">🌐</span> View Site
          </a>
        </nav>
        
        <div class="p-4 border-t border-gray-800">
          <button (click)="logout()" class="w-full flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition">
            Sign Out
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 overflow-auto">
        <header class="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
            <h2 class="text-lg font-semibold text-gray-700">Admin Console</h2>
            <div class="flex items-center">
                <div class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-600">A</div>
            </div>
        </header>
        <div class="p-8">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AdminLayoutComponent {
  private dataService = inject(DataService);
  private router: Router = inject(Router);

  logout() {
    this.dataService.logout();
    this.router.navigate(['/login']);
  }
}