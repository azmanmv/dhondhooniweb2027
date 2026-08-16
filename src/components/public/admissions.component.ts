import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  template: `
    <div class="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-gray-900">Admissions</h1>
        <p class="mt-4 text-xl text-gray-500">Join the Dhondhooni family in a few simple steps.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Process -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
          <div class="space-y-8">
            <div class="flex">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">1</div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Schedule a Tour</h3>
                <p class="mt-2 text-gray-500">Contact us to visit our campus and meet our teachers.</p>
              </div>
            </div>
             <div class="flex">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">2</div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Submit Application</h3>
                <p class="mt-2 text-gray-500">Fill out the enrollment form and submit it with the registration fee.</p>
              </div>
            </div>
             <div class="flex">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">3</div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Enrollment Confirmation</h3>
                <p class="mt-2 text-gray-500">We will review your application and confirm your child's placement.</p>
              </div>
            </div>
          </div>
          
          <div class="mt-10">
            <button class="bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition flex items-center">
              <span class="mr-2">📄</span> Download Application Form (PDF)
            </button>
          </div>
        </div>

        <!-- Tuition -->
        <div class="bg-gray-50 p-8 rounded-xl shadow-inner">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Tuition & Fees</h2>
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="text-left text-sm font-semibold text-gray-500 uppercase tracking-wider pb-4">Program</th>
                <th class="text-right text-sm font-semibold text-gray-500 uppercase tracking-wider pb-4">Monthly Fee</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="py-4 text-gray-900">Toddlers (Half Day)</td>
                <td class="py-4 text-right text-gray-700">$850</td>
              </tr>
              <tr>
                <td class="py-4 text-gray-900">Toddlers (Full Day)</td>
                <td class="py-4 text-right text-gray-700">$1,200</td>
              </tr>
               <tr>
                <td class="py-4 text-gray-900">Preschool (Full Day)</td>
                <td class="py-4 text-right text-gray-700">$1,100</td>
              </tr>
               <tr>
                <td class="py-4 text-gray-900">Pre-K (Full Day)</td>
                <td class="py-4 text-right text-gray-700">$1,100</td>
              </tr>
            </tbody>
          </table>
          <p class="mt-6 text-sm text-gray-500">* A one-time registration fee of $150 applies to all new enrollments.</p>
        </div>
      </div>
    </div>
  `
})
export class AdmissionsComponent {}