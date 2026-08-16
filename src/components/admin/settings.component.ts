import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="bg-white rounded-lg shadow p-8 max-w-2xl">
      <h2 class="text-2xl font-bold mb-6">Website Settings & Theme</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900">Color Palette</h3>
          <p class="text-gray-500 text-sm mb-4">Choose the primary brand colors for the website.</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
              <div class="flex items-center">
                <input type="color" [(ngModel)]="theme.primaryColor" class="h-10 w-10 border border-gray-300 rounded shadow-sm p-1">
                <span class="ml-2 text-gray-600">{{ theme.primaryColor }}</span>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
              <div class="flex items-center">
                <input type="color" [(ngModel)]="theme.secondaryColor" class="h-10 w-10 border border-gray-300 rounded shadow-sm p-1">
                 <span class="ml-2 text-gray-600">{{ theme.secondaryColor }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="pt-6 border-t">
          <button (click)="saveTheme()" class="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Apply Theme Changes
          </button>
        </div>
      </div>
    </div>
  `
})
export class SettingsComponent {
  dataService = inject(DataService);
  theme = { ...this.dataService.content().theme };

  saveTheme() {
    this.dataService.updateContent('theme', this.theme);
    alert('Theme settings updated successfully!');
  }
}