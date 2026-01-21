# REUSABLE TAILWIND SNIPPET SET: PREMIUM DENTAL CLINIC DESIGN

## 1. BACKGROUND PATTERNS & GRADIENTS

### Grain Texture Background
```html
<div class="relative overflow-hidden">
  <div class="absolute inset-0 opacity-8 pointer-events-none" 
       style="background-image: url('data:image/svg+xml,<svg width=100 height=100 xmlns=http://www.w3.org/2000/svg><filter id=noise><feTurbulence type=fractalNoise baseFrequency=0.9 numOctaves=3 stitchTiles=stitch/></filter><rect width=100% height=100% filter=url(%23noise)/></svg>')"></div>
  <!-- Your content here -->
</div>
```

### Radial Gradient Background (Teal)
```html
<div class="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
  <!-- Your content here -->
</div>
```

### Radial Gradient Background (Gold Accent)
```html
<div class="bg-gradient-to-br from-amber-800 via-amber-700 to-amber-600">
  <!-- Your content here -->
</div>
```

## 2. CARD STYLES

### Premium Card with Inset Highlight
```html
<div class="bg-white rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <!-- Card content -->
</div>
```

### Trust Strip Card
```html
<div class="bg-teal-900 text-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
  <div class="absolute inset-0 opacity-10" 
       style="background-image: url('data:image/svg+xml,<svg width=100 height=100 xmlns=http://www.w3.org/2000/svg><filter id=noise><feTurbulence type=fractalNoise baseFrequency=0.9 numOctaves=3 stitchTiles=stitch/></filter><rect width=100% height=100% filter=url(%23noise)/></svg>')"></div>
  <!-- Content -->
</div>
```

### Service Item Card
```html
<div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-amber-500/30 transition-all duration-300 group">
  <!-- Content -->
</div>
```

## 3. BUTTON STYLES

### Primary Button
```html
<button class="bg-teal-900 text-white px-8 py-4 rounded-full font-semibold text-base relative overflow-hidden group hover:bg-teal-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
  <span class="relative z-10 flex items-center gap-2">
    <i class="fas fa-calendar-check"></i>
    Programează-te
  </span>
  <div class="absolute inset-0 bg-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
```

### Secondary Button
```html
<button class="bg-transparent text-teal-900 px-8 py-4 rounded-full font-semibold text-base border-2 border-teal-900 hover:bg-teal-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
  <i class="fas fa-phone"></i>
  Sună acum
</button>
```

### Small Button
```html
<button class="bg-teal-900 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-teal-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
  Programează-te
</button>
```

## 4. SECTION HEADER COMPONENT

### Standard Section Header
```html
<div class="mb-16">
  <span class="inline-block px-6 py-2 bg-amber-500 text-white text-xs font-semibold tracking-wider uppercase mb-4 rounded-full">
    ARTZ DENT
  </span>
  <h2 class="text-4xl md:text-5xl font-bold text-teal-900 mb-4 relative pb-4">
    Zâmbet sănătos. Tratamente moderne.
    <span class="absolute bottom-0 left-0 w-20 h-1 bg-amber-500"></span>
  </h2>
  <p class="text-gray-600 text-lg max-w-2xl leading-relaxed">
    Cabinet stomatologic în Galați, cu planuri clare și grijă reală pentru confortul tău.
  </p>
</div>
```

### Pull-Quote Section Header
```html
<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-8 mb-12 relative overflow-hidden">
  <div class="absolute -top-4 -left-4 text-amber-500/10 text-[120px] font-serif font-bold leading-none">
    “
  </div>
  <blockquote class="text-2xl md:text-3xl font-serif italic text-teal-900 relative z-10">
    Tratamente corecte, explicate simplu.
  </blockquote>
</div>
```

## 5. ANIMATION UTILITIES

### Scroll Reveal Animation
```html
<div class="opacity-0 translate-y-8 transition-all duration-800 ease-out scroll-reveal">
  <!-- Content to reveal -->
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
});
</script>
```

### Hover Lift Animation
```html
<div class="transform transition-transform duration-300 hover:-translate-y-1">
  <!-- Content with lift effect -->
</div>
```

### Underline Animation
```html
<a href="#" class="relative text-gray-900 hover:text-teal-900 transition-colors duration-300">
  Servicii
  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 hover:w-full"></span>
</a>
```

## 6. MICRO-COMPONENTS

### Stat Chip
```html
<div class="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
  <i class="fas fa-calendar-check text-amber-500"></i>
  <span class="text-sm font-semibold text-gray-900">Experiență din 2006</span>
</div>
```

### Trust Item Card
```html
<div class="flex items-start gap-4 bg-teal-900 text-white p-6 rounded-2xl hover:shadow-2xl transition-shadow duration-300 group">
  <div class="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-700 transition-colors duration-300">
    <i class="fas fa-calendar-check text-2xl text-amber-500"></i>
  </div>
  <div>
    <h3 class="text-xl font-semibold mb-2 font-serif">Experiență din 2006</h3>
    <p class="text-teal-200">De aproape două decenii în stomatologie</p>
  </div>
</div>
```

### Testimonial Card
```html
<div class="bg-teal-900 text-white p-8 rounded-2xl relative overflow-hidden">
  <div class="absolute inset-0 opacity-5" 
       style="background-image: url('data:image/svg+xml,<svg width=100 height=100 xmlns=http://www.w3.org/2000/svg><filter id=noise><feTurbulence type=fractalNoise baseFrequency=0.9 numOctaves=3 stitchTiles=stitch/></filter><rect width=100% height=100% filter=url(%23noise)/></svg>')"></div>
  <blockquote class="text-2xl font-serif italic relative z-10">
    “Am întâlnit o echipă de profesioniști care tratează pacientul cu grijă și responsabilitate. Recomand ARTZ DENT.”
  </blockquote>
  <div class="mt-6 flex items-center gap-4 relative z-10">
    <div class="h-12 w-12 rounded-full bg-teal-800 flex items-center justify-center">
      <i class="fas fa-user text-amber-500"></i>
    </div>
    <div>
      <h4 class="font-semibold">Vasilică B.</h4>
      <p class="text-teal-200 text-sm">Pacient</p>
    </div>
  </div>
</div>
```

## 7. FORM ELEMENTS

### Floating Label Input
```html
<div class="relative mb-6">
  <input type="text" id="name" 
         class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:bg-white focus:outline-none transition-all duration-300"
         placeholder=" " required>
  <label for="name" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-amber-500">
    Nume
  </label>
</div>
```

### Textarea with Label
```html
<div class="relative mb-6">
  <textarea id="message" rows="5"
            class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:bg-white focus:outline-none transition-all duration-300"
            placeholder=" " required></textarea>
  <label for="message" class="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-amber-500">
    Mesaj
  </label>
</div>
```

## 8. GALLERY COMPONENTS

### Horizontal Filmstrip
```html
<div class="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-200">
  <div class="min-w-[300px] md:min-w-[400px] rounded-2xl overflow-hidden relative group">
    <img src="image.jpg" alt="Gallery Image" 
         class="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105">
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translateY-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 class="text-white font-serif text-lg font-semibold">Consultație & evaluare</h3>
    </div>
  </div>
</div>
```

## 9. TIMELINE COMPONENT

### Vertical Timeline Item
```html
<div class="relative pb-12">
  <div class="flex gap-6">
    <div class="w-20 flex flex-col items-center">
      <div class="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center font-serif text-xl font-bold">
        01
      </div>
      <div class="flex-1 w-0.5 bg-gray-200 mt-4"></div>
    </div>
    <div class="flex-1 pt-1">
      <h3 class="text-2xl font-serif font-semibold text-teal-900 mb-2">Consultație</h3>
      <p class="text-gray-600">Evaluăm starea actuală a dintelui și gingiilor, discutăm despre nevoile tale.</p>
    </div>
  </div>
</div>
```

## 10. UTILITY CLASSES

### Custom Scrollbar CSS
```css
<style>
  .scrollbar-thin {
    scrollbar-width: thin;
  }
  
  .scrollbar-thumb-amber-500 {
    scrollbar-color: #d4a574 #e5e7eb;
  }
  
  .scrollbar-thumb-amber-500::-webkit-scrollbar {
    height: 6px;
  }
  
  .scrollbar-thumb-amber-500::-webkit-scrollbar-track {
    background: #e5e7eb;
    border-radius: 3px;
  }
  
  .scrollbar-thumb-amber-500::-webkit-scrollbar-thumb {
    background: #d4a574;
    border-radius: 3px;
  }
</style>
```

### Smooth Scroll CSS
```css
<style>
  html {
    scroll-behavior: smooth;
  }
  
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>