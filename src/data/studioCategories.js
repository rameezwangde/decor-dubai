export const studioCategories = {
  'living-room': {
    id: 'living-room',
    name: 'Living Room Decor',
    tagline: 'Modern Elegance & Timeless Living Spaces',
    description: 'Transform your living area into a bespoke sanctuary with tailored upholstery, recessed perimeter lighting, and handcrafted marble finishes.',
    styles: [
      {
        id: 'modern-luxury',
        name: 'Modern Luxury',
        subtitle: 'Warm bronze accents & ambient lighting',
        image: '/studio/living-modern-luxury.jpg',
        thumbnail: '/studio/living-modern-luxury.jpg',
      },
      {
        id: 'contemporary',
        name: 'Contemporary',
        subtitle: 'Sculptural clean lines & cool neutral tones',
        image: '/studio/living-contemporary.jpg',
        thumbnail: '/studio/living-contemporary.jpg',
      },
      {
        id: 'classic',
        name: 'Classic Heritage',
        subtitle: 'Rich amber woods & gilded architectural details',
        image: '/studio/living-classic.jpg',
        thumbnail: '/studio/living-classic.jpg',
      },
      {
        id: 'minimalist',
        name: 'Minimalist Serenity',
        subtitle: 'Organic textures, linen & subtle tones',
        image: '/studio/living-minimalist.jpg',
        thumbnail: '/studio/living-minimalist.jpg',
      },
    ],
    beforeAfter: {
      beforeImage: '/studio/living-before.jpg',
      afterImage: '/studio/living-after.jpg',
      beforeLabel: 'Original Bare Space',
      afterLabel: 'Decor Dubai Transformation',
    },
    viewpoints: [
      { id: 'vp-1', name: 'Master Perspective', image: '/studio/living-view-1.jpg' },
      { id: 'vp-2', name: 'Architectural Wall & Media Unit', image: '/studio/living-view-2.jpg' },
      { id: 'vp-3', name: 'Lounge Seating & Brass Centre Table', image: '/studio/living-view-3.jpg' },
    ],
    gallery: [
      { id: 'g-1', title: 'Grand Villa Salon', style: 'Modern Luxury', image: '/studio/living-modern-luxury.jpg' },
      { id: 'g-2', title: 'Palm Jumeirah Penthouse', style: 'Contemporary', image: '/studio/living-contemporary.jpg' },
      { id: 'g-3', title: 'Emirates Hills Residence', style: 'Classic Heritage', image: '/studio/living-classic.jpg' },
      { id: 'g-4', title: 'Downtown Executive Suite', style: 'Minimalist', image: '/studio/living-minimalist.jpg' },
    ],
    customizationGroups: [
      {
        id: 'sofa',
        title: 'Sofa Fabric & Upholstery',
        options: [
          { id: 'boucle-cream', name: 'Textured Bouclé Cream', color: '#F3EFEA' },
          { id: 'velvet-taupe', name: 'Silk Velvet Taupe', color: '#B3A294' },
          { id: 'leather-cognac', name: 'Saddle Leather Cognac', color: '#8C5627' },
          { id: 'linen-charcoal', name: 'Belgian Linen Charcoal', color: '#3B3632' },
        ],
      },
      {
        id: 'curtains',
        title: 'Window Treatment',
        options: [
          { id: 'curtain-sheer-linen', name: 'Sheer Champagne Linen', color: '#EBE5DC' },
          { id: 'curtain-velvet-drape', name: 'Warm Taupe Blackout Velvet', color: '#96887B' },
          { id: 'curtain-bronze-silk', name: 'Muted Bronze Raw Silk', color: '#A47738' },
        ],
      },
      {
        id: 'wall-finish',
        title: 'Feature Wall Finish',
        options: [
          { id: 'wall-acoustic-slat', name: 'Fluted American Walnut Slats', color: '#5C4430' },
          { id: 'wall-travertine', name: 'Roman Travertine Stone Plaster', color: '#DDD2C3' },
          { id: 'wall-accent-brass', name: 'Warm Backlit Bronze Panel', color: '#8E6733' },
        ],
      },
      {
        id: 'lighting',
        title: 'Ambient Lighting Temperature',
        options: [
          { id: 'light-2700k', name: 'Warm Sunset 2700K', color: '#FAD8A5' },
          { id: 'light-3000k', name: 'Soft Neutral 3000K', color: '#FFF2DB' },
          { id: 'light-3500k', name: 'Crisp Architectural 3500K', color: '#FDFBF7' },
        ],
      },
    ],
  },

  'bed-room': {
    id: 'bed-room',
    name: 'Bed Room Decor',
    tagline: 'Quiet Luxury & Master Suite Comfort',
    description: 'Bespoke bedroom sanctuaries crafted with floor-to-ceiling upholstered headboards, acoustic wall treatments, and serene dimmable lighting.',
    styles: [
      {
        id: 'modern-luxury',
        name: 'Modern Luxury',
        subtitle: 'Geometric headboard & warm mood pendants',
        image: '/studio/bedroom-modern-luxury.jpg',
        thumbnail: '/studio/bedroom-modern-luxury.jpg',
      },
      {
        id: 'contemporary',
        name: 'Contemporary',
        subtitle: 'Clean architectural framing & crisp linens',
        image: '/studio/bedroom-contemporary.jpg',
        thumbnail: '/studio/bedroom-contemporary.jpg',
      },
      {
        id: 'classic',
        name: 'Classic Heritage',
        subtitle: 'Deep tufted upholstery & regal symmetry',
        image: '/studio/bedroom-classic.jpg',
        thumbnail: '/studio/bedroom-classic.jpg',
      },
      {
        id: 'minimalist',
        name: 'Minimalist Serenity',
        subtitle: 'Natural wood platform bed & calm earth tones',
        image: '/studio/bedroom-minimalist.jpg',
        thumbnail: '/studio/bedroom-minimalist.jpg',
      },
    ],
    beforeAfter: {
      beforeImage: '/studio/bedroom-before.jpg',
      afterImage: '/studio/bedroom-after.jpg',
      beforeLabel: 'Unfinished Shell',
      afterLabel: 'Decor Dubai Master Suite',
    },
    viewpoints: [
      { id: 'vp-1', name: 'Full Suite View', image: '/studio/bedroom-view-1.jpg' },
      { id: 'vp-2', name: 'Bed & Wall Paneling', image: '/studio/bedroom-view-2.jpg' },
      { id: 'vp-3', name: 'Lighting & Bedside Detailing', image: '/studio/bedroom-view-3.jpg' },
    ],
    gallery: [
      { id: 'g-1', title: 'Al Barari Sanctuary', style: 'Modern Luxury', image: '/studio/bedroom-modern-luxury.jpg' },
      { id: 'g-2', title: 'City Walk Penthouse', style: 'Contemporary', image: '/studio/bedroom-contemporary.jpg' },
      { id: 'g-3', title: 'Jumeirah Golf Estates Villa', style: 'Classic Heritage', image: '/studio/bedroom-classic.jpg' },
      { id: 'g-4', title: 'Dubai Hills Master Bedroom', style: 'Minimalist', image: '/studio/bedroom-minimalist.jpg' },
    ],
    customizationGroups: [
      {
        id: 'headboard',
        title: 'Headboard Paneling & Material',
        options: [
          { id: 'hb-suede', name: 'Plush Micro-Suede Camel', color: '#C4AB94' },
          { id: 'hb-leather', name: 'Padded Italian Leather Biscuit', color: '#D5C4B1' },
          { id: 'hb-velvet', name: 'Deep Espresso Velvet', color: '#453830' },
        ],
      },
      {
        id: 'wallpaper',
        title: 'Accent Wallcovering',
        options: [
          { id: 'wp-textured-silk', name: 'Metallic Grasscloth Silk', color: '#BCA895' },
          { id: 'wp-geometric', name: 'Subtle Gilded Line Motif', color: '#A38B72' },
          { id: 'wp-mural', name: 'Abstract Desert Horizon', color: '#887461' },
        ],
      },
      {
        id: 'lighting',
        title: 'Pendant & Recessed Sconces',
        options: [
          { id: 'light-fluted-glass', name: 'Amber Fluted Glass Globes', color: '#DFB071' },
          { id: 'light-brushed-brass', name: 'Linear Brushed Brass Cylinders', color: '#B28243' },
          { id: 'light-halo', name: 'Concealed LED Halo Glow', color: '#FFF1D6' },
        ],
      },
      {
        id: 'curtains',
        title: 'Window Draping',
        options: [
          { id: 'curtain-dual', name: 'Dual Sheer & Acoustic Blackout', color: '#EAE4DC' },
          { id: 'curtain-linen', name: 'Heavy Oatmeal French Linen', color: '#BFB5A8' },
        ],
      },
    ],
  },

  'window-decor': {
    id: 'window-decor',
    name: 'Window Decor',
    tagline: 'Custom Motorized Drapery & Architectural Shades',
    description: 'Precision window treatments designed specifically for Dubai floor-to-ceiling glass expanses, blocking harsh sunlight while preserving natural warmth.',
    styles: [
      {
        id: 'sheer-curtains',
        name: 'Sheer Curtains',
        subtitle: 'Soft wave-fold light filtering voiles',
        image: '/studio/window-modern-luxury.jpg',
        thumbnail: '/studio/window-modern-luxury.jpg',
      },
      {
        id: 'blackout-curtains',
        name: 'Blackout Curtains',
        subtitle: 'Triple-weave thermal blackout drapes',
        image: '/studio/window-contemporary.jpg',
        thumbnail: '/studio/window-contemporary.jpg',
      },
      {
        id: 'roman-blinds',
        name: 'Roman Blinds',
        subtitle: 'Tailored cascading folds with border trims',
        image: '/studio/window-classic.jpg',
        thumbnail: '/studio/window-classic.jpg',
      },
      {
        id: 'roller-blinds',
        name: 'Roller Blinds',
        subtitle: 'Minimalist motorized architectural solar screens',
        image: '/studio/window-minimalist.jpg',
        thumbnail: '/studio/window-minimalist.jpg',
      },
    ],
    beforeAfter: {
      beforeImage: '/studio/window-before.jpg',
      afterImage: '/studio/window-after.jpg',
      beforeLabel: 'Harsh Direct Sun Glare',
      afterLabel: 'Decor Dubai Tailored Drapes',
    },
    viewpoints: [
      { id: 'vp-1', name: 'Full Window Archway', image: '/studio/window-view-1.jpg' },
      { id: 'vp-2', name: 'Tieback & Fabric Pleat Detail', image: '/studio/window-view-2.jpg' },
      { id: 'vp-3', name: 'Motorized Track Integration', image: '/studio/window-view-3.jpg' },
    ],
    gallery: [
      { id: 'g-1', title: 'Floor-to-Ceiling Ripplefold', style: 'Sheer Curtains', image: '/studio/window-modern-luxury.jpg' },
      { id: 'g-2', title: 'Grand Living Room Drapery', style: 'Blackout Curtains', image: '/studio/window-contemporary.jpg' },
      { id: 'g-3', title: 'Executive Study Roman Shades', style: 'Roman Blinds', image: '/studio/window-classic.jpg' },
      { id: 'g-4', title: 'Modern Glass Penthouse Blinds', style: 'Roller Blinds', image: '/studio/window-minimalist.jpg' },
    ],
    customizationGroups: [
      {
        id: 'color-palette',
        title: 'Curtain Color Selection',
        options: [
          { id: 'drape-champagne', name: 'Champagne Taupe', color: '#C7B9AA' },
          { id: 'drape-sand', name: 'Warm Desert Sand', color: '#DFD5C6' },
          { id: 'drape-bronze', name: 'Deep Muted Bronze', color: '#88622F' },
          { id: 'drape-charcoal', name: 'Shadow Charcoal', color: '#3A3734' },
        ],
      },
      {
        id: 'texture',
        title: 'Fabric Texture & Weave',
        options: [
          { id: 'tex-linen', name: 'Textured Slub Linen', color: '#E4DDD2' },
          { id: 'tex-velvet', name: 'Matte Cotton Velvet', color: '#918274' },
          { id: 'tex-voile', name: 'Ultra-Fine European Voile', color: '#FAF7F2' },
        ],
      },
      {
        id: 'motorization',
        title: 'Automation & Track System',
        options: [
          { id: 'somfy-smart', name: 'Somfy Smart Home Motorized Track', color: '#2B2B2B' },
          { id: 'concealed-recess', name: 'Concealed Ceiling Pocket Track', color: '#CFC5B8' },
          { id: 'decorative-rod', name: 'Brushed Bronze Architectural Pole', color: '#A47738' },
        ],
      },
    ],
  },

  'kitchen-decor': {
    id: 'kitchen-decor',
    name: 'Kitchen Decor',
    tagline: 'Gourmet Islands & Architectural Joinery',
    description: 'Transformative culinary spaces blending seamless handleless cabinetry, waterfall marble centerpieces, and warm under-counter luminescence.',
    styles: [
      {
        id: 'modern',
        name: 'Modern Luxury',
        subtitle: 'Calacatta waterfall island & dark oak joinery',
        image: '/studio/kitchen-modern-luxury.jpg',
        thumbnail: '/studio/kitchen-modern-luxury.jpg',
      },
      {
        id: 'contemporary',
        name: 'Contemporary',
        subtitle: 'Matte taupe cabinetry & fluted bar stools',
        image: '/studio/kitchen-contemporary.jpg',
        thumbnail: '/studio/kitchen-contemporary.jpg',
      },
      {
        id: 'classic',
        name: 'Classic Heritage',
        subtitle: 'Shaker profile doors & antique brass fittings',
        image: '/studio/kitchen-classic.jpg',
        thumbnail: '/studio/kitchen-classic.jpg',
      },
      {
        id: 'minimalist',
        name: 'Minimalist Monolith',
        subtitle: 'Flush push-to-open panels & concealed appliances',
        image: '/studio/kitchen-minimalist.jpg',
        thumbnail: '/studio/kitchen-minimalist.jpg',
      },
    ],
    beforeAfter: {
      beforeImage: '/studio/kitchen-before.jpg',
      afterImage: '/studio/kitchen-after.jpg',
      beforeLabel: 'Standard Developer Fitout',
      afterLabel: 'Decor Dubai Custom Kitchen',
    },
    viewpoints: [
      { id: 'vp-1', name: 'Full Kitchen & Island Island', image: '/studio/kitchen-view-1.jpg' },
      { id: 'vp-2', name: 'Countertop & Backsplash Detailing', image: '/studio/kitchen-view-2.jpg' },
      { id: 'vp-3', name: 'Pendant Cluster & Stool Bar', image: '/studio/kitchen-view-3.jpg' },
    ],
    gallery: [
      { id: 'g-1', title: 'Dubai Marina Gourmet Kitchen', style: 'Modern Luxury', image: '/studio/kitchen-modern-luxury.jpg' },
      { id: 'g-2', title: 'Meydan Contemporary Villa', style: 'Contemporary', image: '/studio/kitchen-contemporary.jpg' },
      { id: 'g-3', title: 'Jumeirah Classic Kitchen', style: 'Classic Heritage', image: '/studio/kitchen-classic.jpg' },
      { id: 'g-4', title: 'Bluewaters Island Minimalist', style: 'Minimalist Monolith', image: '/studio/kitchen-minimalist.jpg' },
    ],
    customizationGroups: [
      {
        id: 'cabinets',
        title: 'Cabinetry Finish',
        options: [
          { id: 'cab-taupe-matte', name: 'Anti-Fingerprint Matte Taupe', color: '#9E9286' },
          { id: 'cab-smoked-oak', name: 'Smoked Crown Oak Veneer', color: '#4A3B32' },
          { id: 'cab-pure-cream', name: 'Warm Cream Satin Lacquer', color: '#F1ECE4' },
        ],
      },
      {
        id: 'countertop',
        title: 'Countertop & Island Slab',
        options: [
          { id: 'ct-calacatta-gold', name: 'Calacatta Gold Porcelain Slab', color: '#EBE6DE' },
          { id: 'ct-pietra-grey', name: 'Pietra Grey Polished Marble', color: '#5B5854' },
          { id: 'ct-taj-mahal', name: 'Taj Mahal Quartzite', color: '#D6CBC0' },
        ],
      },
      {
        id: 'backsplash',
        title: 'Backsplash Treatment',
        options: [
          { id: 'bs-bookmatch', name: 'Full-Height Bookmatched Marble', color: '#E2DBD2' },
          { id: 'bs-smoked-mirror', name: 'Bronze Tinted Smoked Mirror', color: '#6A5644' },
          { id: 'bs-fluted-tile', name: 'Handmade Glazed Fluted Ceramic', color: '#CDC2B4' },
        ],
      },
      {
        id: 'pendants',
        title: 'Island Pendant Fixtures',
        options: [
          { id: 'pen-glass-globe', name: 'Ribbed Amber Glass Cylinders', color: '#C89352' },
          { id: 'pen-linear-brass', name: 'Brushed Brass Architectural Bar', color: '#AA7B39' },
          { id: 'pen-black-metal', name: 'Matte Black Slender Cones', color: '#2C2B29' },
        ],
      },
    ],
  },

  'wall-decor': {
    id: 'wall-decor',
    name: 'Wall Decor',
    tagline: 'Bespoke Slats, Marble Cladding & Fine Artwork',
    description: 'Distinctive focal walls tailored with acoustic timber fluting, integrated backlighting, textured Venetian plasters, and custom art curation.',
    styles: [
      {
        id: 'wood-panels',
        name: 'Wood Panels',
        subtitle: 'Acoustic vertical timber slats with backlighting',
        image: '/studio/wall-modern-luxury.jpg',
        thumbnail: '/studio/wall-modern-luxury.jpg',
      },
      {
        id: 'marble-finish',
        name: 'Marble-Effect Finishes',
        subtitle: 'Large-format porcelain slabs with gold inlays',
        image: '/studio/wall-contemporary.jpg',
        thumbnail: '/studio/wall-contemporary.jpg',
      },
      {
        id: 'wallpaper',
        name: 'Textured Wallpaper',
        subtitle: 'Embossed metallic grasscloth & artistic murals',
        image: '/studio/wall-classic.jpg',
        thumbnail: '/studio/wall-classic.jpg',
      },
      {
        id: 'decorative-molding',
        name: 'Decorative Molding',
        subtitle: 'Refined Parisian wainscoting & boiserie panels',
        image: '/studio/wall-minimalist.jpg',
        thumbnail: '/studio/wall-minimalist.jpg',
      },
    ],
    beforeAfter: {
      beforeImage: '/studio/wall-before.jpg',
      afterImage: '/studio/wall-after.jpg',
      beforeLabel: 'Plain White Gypsum Wall',
      afterLabel: 'Decor Dubai Accent Feature Wall',
    },
    viewpoints: [
      { id: 'vp-1', name: 'Full Accent Wall & Console', image: '/studio/wall-view-1.jpg' },
      { id: 'vp-2', name: 'Slat Texture & LED Illumination', image: '/studio/wall-view-2.jpg' },
      { id: 'vp-3', name: 'Framed Fine Art Vignette', image: '/studio/wall-view-3.jpg' },
    ],
    gallery: [
      { id: 'g-1', title: 'Walnut & Travertine TV Console Wall', style: 'Wood Panels', image: '/studio/wall-modern-luxury.jpg' },
      { id: 'g-2', title: 'Emirates Hills Foyer Cladding', style: 'Marble-Effect', image: '/studio/wall-contemporary.jpg' },
      { id: 'g-3', title: 'Silk Textured Dining Room Wall', style: 'Wallpaper', image: '/studio/wall-classic.jpg' },
      { id: 'g-4', title: 'Classical Parisian Boiserie Suite', style: 'Decorative Molding', image: '/studio/wall-minimalist.jpg' },
    ],
    customizationGroups: [
      {
        id: 'wood-type',
        title: 'Fluted Timber Finish',
        options: [
          { id: 'wood-walnut', name: 'Rich American Walnut', color: '#543D2B' },
          { id: 'wood-natural-oak', name: 'Scandi Natural White Oak', color: '#BCA488' },
          { id: 'wood-charcoal-ash', name: 'Smoked Charcoal Ash', color: '#38332E' },
        ],
      },
      {
        id: 'wall-color',
        title: 'Background Plaster & Paint',
        options: [
          { id: 'color-limewash', name: 'Oatmeal Limewash Texture', color: '#DDD6CC' },
          { id: 'color-greige', name: 'Warm Velvet Greige', color: '#B8ADA2' },
          { id: 'color-travertine-stone', name: 'Honed Roman Travertine Stone', color: '#ECE5DB' },
        ],
      },
      {
        id: 'art-frame',
        title: 'Curated Artwork & Frame',
        options: [
          { id: 'art-bronze', name: 'Abstract Neutral in Brushed Bronze Frame', color: '#9C7742' },
          { id: 'art-black', name: 'Minimalist Line Art in Slim Black Frame', color: '#2B2825' },
          { id: 'art-wood', name: 'Textured Canvas in Floating Oak Frame', color: '#B3997A' },
        ],
      },
      {
        id: 'backlight',
        title: 'Integrated Lighting Feature',
        options: [
          { id: 'led-warm', name: 'Concealed Warm Bronze LED Ribbon', color: '#F1C783' },
          { id: 'led-halo', name: 'Soft Diffused Glow Channel', color: '#F8E7C8' },
        ],
      },
    ],
  },
};

