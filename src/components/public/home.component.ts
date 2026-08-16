import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Hero Section -->
    <div class="relative bg-yellow-50 overflow-hidden">
      <div class="absolute -top-24 -left-24 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left fade-in">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl drop-shadow-sm">
                <span class="block xl:inline display-font text-[var(--primary-color)]">{{ dataService.content().home.heroTitle }}</span>
              </h1>
              <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 font-medium">
                {{ dataService.content().home.heroSubtitle }}
              </p>
              <div class="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <div class="rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <a routerLink="/contact" class="w-full flex items-center justify-center px-8 py-4 border-4 border-transparent text-lg font-bold rounded-full text-white md:py-4 md:text-xl transition-all"
                     [style.backgroundColor]="dataService.content().theme.primaryColor">
                    Schedule a Tour!
                  </a>
                </div>
                <div class="mt-3 sm:mt-0">
                  <a routerLink="/programs" class="w-full flex items-center justify-center px-8 py-4 border-4 text-lg font-bold rounded-full bg-white hover:bg-gray-50 md:py-4 md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" [style.borderColor]="dataService.content().theme.secondaryColor" [style.color]="dataService.content().theme.secondaryColor">
                    Our Programs
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 p-8 lg:p-12 hidden lg:flex items-center justify-center">
        <div class="relative w-full max-w-lg aspect-square">
           <div class="absolute inset-0 bg-[var(--secondary-color)] rounded-[3rem] rotate-6 transform opacity-20"></div>
           <div class="absolute inset-0 bg-[var(--primary-color)] rounded-[3rem] -rotate-3 transform opacity-20"></div>
           <img class="relative w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white" [src]="dataService.content().home.heroImage" alt="Happy children in preschool">
        </div>
      </div>
    </div>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h2 class="text-lg font-bold tracking-widest uppercase rounded-full inline-block px-4 py-1 mb-4" [style.backgroundColor]="'#FEF08A'" [style.color]="'#ca8a04'">Our Values</h2>
          <p class="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl display-font">Why Choose Dhondhooni?</p>
        </div>
        
        <div class="mt-16">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            @for (feature of features; track feature.title; let i = $index) {
              <div class="flex flex-col items-center text-center p-8 rounded-[2.5rem] hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4"
                   [class.bg-blue-50]="i % 3 === 0" [class.border-blue-200]="i % 3 === 0"
                   [class.bg-pink-50]="i % 3 === 1" [class.border-pink-200]="i % 3 === 1"
                   [class.bg-green-50]="i % 3 === 2" [class.border-green-200]="i % 3 === 2">
                <div class="flex items-center justify-center h-20 w-20 rounded-full text-white mb-6 shadow-md bg-white border-4"
                     [class.border-blue-300]="i % 3 === 0"
                     [class.border-pink-300]="i % 3 === 1"
                     [class.border-green-300]="i % 3 === 2">
                  <span class="text-4xl">{{feature.icon}}</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 display-font">{{ feature.title }}</h3>
                <p class="mt-4 text-lg text-gray-600 font-medium">{{ feature.desc }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Preview -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-gray-900 display-font">Our Programs</h2>
          <p class="mt-4 text-2xl text-gray-600">Tailored learning experiences for every stage of development.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-b-8 border-yellow-400">
               <img class="h-56 w-full object-cover" src="https://picsum.photos/id/40/600/400" alt="Toddlers">
               <div class="p-8">
                 <h3 class="text-2xl font-bold mb-3 display-font text-yellow-600">Toddlers (2-3 Yrs)</h3>
                 <p class="text-gray-600 mb-6 font-medium text-lg">Sensory play, social interaction, and early language development.</p>
                 <a routerLink="/programs" class="inline-block px-6 py-2 rounded-full font-bold text-yellow-600 bg-yellow-100 hover:bg-yellow-200 transition-colors">Explore &rarr;</a>
               </div>
            </div>
            <div class="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-b-8" [style.borderColor]="dataService.content().theme.secondaryColor">
               <img class="h-56 w-full object-cover" src="https://picsum.photos/id/50/600/400" alt="Preschool">
               <div class="p-8">
                 <h3 class="text-2xl font-bold mb-3 display-font" [style.color]="dataService.content().theme.secondaryColor">Preschool (3-4 Yrs)</h3>
                 <p class="text-gray-600 mb-6 font-medium text-lg">Structured activities building cognitive skills and creativity.</p>
                 <a routerLink="/programs" class="inline-block px-6 py-2 rounded-full font-bold transition-colors" [style.color]="dataService.content().theme.secondaryColor" style="background-color: #ccfbf1" hover="background-color: #99f6e4">Explore &rarr;</a>
               </div>
            </div>
            <div class="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-b-8" [style.borderColor]="dataService.content().theme.primaryColor">
               <img class="h-56 w-full object-cover" src="https://picsum.photos/id/60/600/400" alt="Pre-K">
               <div class="p-8">
                 <h3 class="text-2xl font-bold mb-3 display-font" [style.color]="dataService.content().theme.primaryColor">Pre-K (4-5 Yrs)</h3>
                 <p class="text-gray-600 mb-6 font-medium text-lg">School readiness focusing on literacy, numeracy, and problem-solving.</p>
                 <a routerLink="/programs" class="inline-block px-6 py-2 rounded-full font-bold transition-colors" [style.color]="dataService.content().theme.primaryColor" style="background-color: #ffe4e6">Explore &rarr;</a>
               </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-16 display-font">Happy Parents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="bg-yellow-50 p-10 rounded-[3rem] relative shadow-md border-4 border-yellow-200">
            <div class="absolute -top-6 -left-6 text-6xl text-yellow-300 font-serif">"</div>
            <p class="text-gray-800 text-lg italic mb-6 relative z-10 font-medium">My daughter loves coming here every day. The teachers are so caring and the activities are fantastic. We've seen her confidence grow so much!</p>
            <div class="font-bold text-gray-900 text-xl">- Sarah Jenkins</div>
          </div>
          <div class="bg-pink-50 p-10 rounded-[3rem] relative shadow-md border-4 border-pink-200">
            <div class="absolute -top-6 -left-6 text-6xl text-pink-300 font-serif">"</div>
            <p class="text-gray-800 text-lg italic mb-6 relative z-10 font-medium">Dhondhooni has been a blessing for our family. The curriculum is excellent and the environment is safe and nurturing. Highly recommended!</p>
            <div class="font-bold text-gray-900 text-xl">- Michael Chen</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  dataService = inject(DataService);
  
  features = [
    { title: 'Safe Environment', desc: 'Secure facilities and rigorous safety protocols for your peace of mind.', icon: '🛡️' },
    { title: 'Expert Teachers', desc: 'Qualified and passionate educators dedicated to child development.', icon: '👩‍🏫' },
    { title: 'Play-Based Learning', desc: 'Curriculum designed to spark curiosity and joy through exploration.', icon: '🧩' },
  ];
}