import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  standalone: true,
  template: `
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-gray-900">Our Programs</h1>
          <p class="mt-4 text-xl text-gray-500">Curriculum designed for every age group.</p>
        </div>

        <div class="space-y-16">
          <!-- Toddlers -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <img src="https://picsum.photos/id/80/800/600" alt="Toddlers" class="w-full h-full object-cover">
            </div>
            <div class="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div class="uppercase tracking-wide text-sm text-blue-500 font-semibold">Ages 2-3</div>
              <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Toddler Program</h2>
              <p class="mt-4 text-lg text-gray-500">Our toddler program encourages exploration and discovery in a safe, nurturing environment. We focus on social skills, language development, and sensory play.</p>
              <ul class="mt-6 space-y-3 text-gray-600">
                <li class="flex items-center">⭐ Sensory-rich activities</li>
                <li class="flex items-center">⭐ Music and movement</li>
                <li class="flex items-center">⭐ Early socialization</li>
              </ul>
            </div>
          </div>

          <!-- Preschool -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse">
            <div class="md:w-1/2">
              <img src="https://picsum.photos/id/90/800/600" alt="Preschool" class="w-full h-full object-cover">
            </div>
            <div class="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div class="uppercase tracking-wide text-sm text-pink-500 font-semibold">Ages 3-4</div>
              <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Preschool Program</h2>
              <p class="mt-4 text-lg text-gray-500">We foster independence and curiosity through structured activities and free play. Children learn early math concepts, pre-reading skills, and collaborative problem solving.</p>
               <ul class="mt-6 space-y-3 text-gray-600">
                <li class="flex items-center">⭐ Creative arts and crafts</li>
                <li class="flex items-center">⭐ Storytelling and library time</li>
                <li class="flex items-center">⭐ Outdoor nature play</li>
              </ul>
            </div>
          </div>

          <!-- Pre-K -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <img src="https://picsum.photos/id/100/800/600" alt="Pre-K" class="w-full h-full object-cover">
            </div>
            <div class="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div class="uppercase tracking-wide text-sm text-green-500 font-semibold">Ages 4-5</div>
              <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Pre-K Program</h2>
              <p class="mt-4 text-lg text-gray-500">Preparing your child for kindergarten with a focus on literacy, numeracy, and critical thinking. We ensure they are confident and ready for the next big step.</p>
               <ul class="mt-6 space-y-3 text-gray-600">
                <li class="flex items-center">⭐ Phonics and early reading</li>
                <li class="flex items-center">⭐ Scientific exploration</li>
                <li class="flex items-center">⭐ Project-based learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProgramsComponent {}