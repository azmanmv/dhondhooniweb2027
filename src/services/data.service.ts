import { Injectable, signal, computed, effect } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
  };
  about: {
    history: string;
    mission: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Initial Mock Data
  private initialContent: SiteContent = {
    home: {
      heroTitle: "Nurturing Little Minds for a Bright Future",
      heroSubtitle: "Welcome to Dhondhooni Little Learners, where every day is an adventure in learning, play, and growth.",
      heroImage: "https://picsum.photos/id/10/1200/600"
    },
    about: {
      history: "Founded in 2015, Dhondhooni Little Learners started as a small home-based playgroup. Over the years, we have grown into a premier early childhood education center, serving hundreds of families in our community.",
      mission: "To provide a safe, inclusive, and stimulating environment where children can explore their interests, develop social skills, and build a strong foundation for lifelong learning."
    },
    contact: {
      email: "hello@dhondhooni.edu",
      phone: "(555) 123-4567",
      address: "123 Sunshine Avenue, Happy Valley, CA 90210"
    },
    theme: {
      primaryColor: "#FF6B6B", // Bright Pink/Red
      secondaryColor: "#4ECDC4" // Turquoise
    }
  };

  private initialBlogs: BlogPost[] = [
    {
      id: 1,
      title: "The Importance of Play-Based Learning",
      date: "October 15, 2023",
      excerpt: "Discover why play is the serious business of childhood and how it shapes brain development.",
      content: "Play is often seen as a break from learning, but for children, play is learning...",
      image: "https://picsum.photos/id/20/800/400"
    },
    {
      id: 2,
      title: "Tips for a Smooth Preschool Transition",
      date: "September 1, 2023",
      excerpt: "Starting preschool is a big milestone. Here are some tips to help your little one adjust.",
      content: "The first day of school can be scary. Here is how you can prepare...",
      image: "https://picsum.photos/id/30/800/400"
    }
  ];

  // Signals
  content = signal<SiteContent>(this.initialContent);
  blogPosts = signal<BlogPost[]>(this.initialBlogs);
  isAuthenticated = signal<boolean>(false);

  constructor() {
    // Effect to apply theme colors to document
    effect(() => {
      const theme = this.content().theme;
      document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
      document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    });
  }

  updateContent(section: keyof SiteContent, data: any) {
    this.content.update(current => ({
      ...current,
      [section]: { ...current[section], ...data }
    }));
  }

  addBlogPost(post: BlogPost) {
    this.blogPosts.update(posts => [post, ...posts]);
  }

  deleteBlogPost(id: number) {
    this.blogPosts.update(posts => posts.filter(p => p.id !== id));
  }

  login(password: string): boolean {
    // Mock login - password is "admin"
    if (password === 'admin') {
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.set(false);
  }
}