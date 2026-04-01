export type StoreCategory = {
  name: string
  slug: string
  image: string
  description: string
  products: {
    title: string
    slug: string
    tagline: string
    price?: string
    image: string
  }[]
}

export type StoreContent = {
  heroHeadline: string
  latestHeadline: string
  categories: StoreCategory[]
  latestProducts: {
    title: string
    slug: string
    tagline: string
    price?: string
    image: string
    link: string
  }[]
  experienceCards: {
    tag: string
    title: string
    subtitle: string | null
  }[]
  quickLinks: {
    label: string
    to?: string
    href?: string
    external?: boolean
  }[]
}

export const fallbackStoreContent: StoreContent = {
  heroHeadline: 'The best way to buy the products you love.',
  latestHeadline: "Take a look at what's new right now.",
  categories: [
    {
      name: 'Phones',
      slug: 'phones',
      image: '/images/iphone16-sph2.jpg',
      description: 'The latest smartphones. Power, camera, and battery that keep up with you.',
      products: [
        { title: 'Pro 17', slug: 'pro-17', tagline: 'All out Pro.', price: 'From £1,099', image: '/images/17pro.jpg' },
        { title: 'Pro 16', slug: 'pro-16', tagline: 'Pro. Beyond.', price: 'From £999', image: '/images/iphone16-sph2.jpg' },
      ],
    },
    {
      name: 'Audio',
      slug: 'audio',
      image: '/images/beatsheadphone.jpg',
      description: 'Headphones and earbuds for music, calls, and immersive sound.',
      products: [
        { title: 'Beats Studio', slug: 'beats-studio', tagline: 'Premium sound.', price: 'From £299', image: '/images/beatsheadphone.jpg' },
      ],
    },
    {
      name: 'Gaming',
      slug: 'gaming',
      image: '/images/ps5.jpg',
      description: 'Consoles, controllers, and gear for the ultimate play.',
      products: [
        { title: 'Console', slug: 'console', tagline: 'Next-level play.', price: 'From £449', image: '/images/ps5.jpg' },
      ],
    },
    {
      name: 'Laptops',
      slug: 'laptops',
      image: '/images/laptops-sph.jpg',
      description: 'Light, powerful laptops built to go anywhere.',
      products: [
        { title: 'Laptop', slug: 'laptop', tagline: 'Speed of lightness.', price: 'From £999', image: '/images/laptops-sph.jpg' },
      ],
    },
    {
      name: 'Accessories',
      slug: 'accessories',
      image: '/images/metaglass.jpg',
      description: 'Cases, chargers, and everything to complete your setup.',
      products: [
        { title: 'Smart Glasses', slug: 'smart-glasses', tagline: 'Complete your setup.', price: 'From £199', image: '/images/metaglass.jpg' },
      ],
    },
  ],
  latestProducts: [
    { title: 'Pro 17', slug: 'pro-17', tagline: 'All out Pro.', price: 'From £1,099 or £36.63/mo. for 30 mo. at 0% interest*', image: '/images/17pro.jpg', link: '#' },
    { title: 'Laptop', slug: 'laptop', tagline: 'Speed of lightness.', price: 'From £999 or £29.84/mo. for 36 mo. at 4.9% interest', image: '/images/laptops-sph.jpg', link: '#' },
    { title: 'Watch', slug: 'watch', tagline: 'Inspired by the power of connection.', price: 'From £99', image: '/images/applewatch-sph.jpg', link: '#' },
  ],
  experienceCards: [
    { tag: 'SMARTPHONEHUB', title: 'SmartPhoneHub experience.', subtitle: 'Get things done effortlessly across your devices.' },
    { tag: 'CONTINUITY', title: 'Powerful alone. Superpowered together.', subtitle: null },
    { tag: 'STORE APP', title: 'Put your bow on it.', subtitle: 'Make the gift unmistakably theirs with a personalised message.' },
  ],
  quickLinks: [
    { label: 'Find a Store', to: '/', external: false },
    { label: 'Order Status', href: '#', external: true },
    { label: 'Shopping Help', href: '#', external: true },
    { label: 'Returns', href: '#', external: true },
    { label: 'Your Saves', href: '#', external: true },
  ],
}
