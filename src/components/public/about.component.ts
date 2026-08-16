import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">About Us</h1>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Nurturing the leaders of tomorrow.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p class="text-lg text-gray-700 leading-relaxed">{{ dataService.content().about.history }}</p>
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
             <img src="https://picsum.photos/id/70/600/400" alt="School History" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16">
           <h2 class="text-3xl font-bold text-center text-gray-900 mb-6">Mission & Vision</h2>
           <p class="text-xl text-center text-gray-800 max-w-3xl mx-auto">{{ dataService.content().about.mission }}</p>
        </div>

        <div>
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             @for (member of team; track member.name) {
               <div class="text-center">
                 <div class="relative w-32 h-32 mx-auto mb-4">
                   <img [src]="member.image" class="w-full h-full object-cover rounded-full border-4 border-white shadow-md" alt="Team member">
                 </div>
                 <h3 class="text-lg font-bold text-gray-900">{{ member.name }}</h3>
                 <p class="text-sm text-blue-600 font-medium">{{ member.role }}</p>
               </div>
             }
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  dataService = inject(DataService);
  
  team = [
    { name: 'Alice Walker', role: 'Director', image: 'https://picsum.photos/id/64/150/150' },
    { name: 'John Doe', role: 'Lead Teacher', image: 'https://picsum.photos/id/91/150/150' },
    { name: 'Emma Brown', role: 'Teacher Assistant', image: 'https://picsum.photos/id/65/150/150' },
    { name: 'Sophia Davis', role: 'Art Specialist', image: 'https://picsum.photos/id/177/150/150' },
  ];
}