import { BlogPost } from '../components/BlogPost.jsx'
import { Leaf } from 'lucide-react'

export function Blog() {
  const blogPosts = [
    {
      title: "Best Eco-Friendly Dog Toys 2025: Complete Buyer's Guide",
      excerpt: "Discover the top sustainable dog toys that are safe for your pet and the planet. From natural rubber to organic cotton, we review the best eco-friendly options available in 2025.",
      date: "August 28, 2025",
      readTime: "8 min read",
      author: "SustainYourPet Team",
      tags: ["Dog Toys", "Eco-Friendly", "Buyer's Guide", "2025"],
      slug: "best-eco-friendly-dog-toys-2025"
    },
    {
      title: "Sustainable Pet Food Guide: Natural & Organic Options",
      excerpt: "Learn about the benefits of sustainable pet food and discover the best natural and organic options for your furry friends. Complete with brand reviews and nutritional insights.",
      date: "August 28, 2025",
      readTime: "10 min read",
      author: "SustainYourPet Team",
      tags: ["Pet Food", "Sustainable", "Organic", "Natural"],
      slug: "sustainable-pet-food-guide"
    },
    {
      title: "Zero Waste Pet Care: Eco-Friendly Products Every Pet Owner Needs",
      excerpt: "Transform your pet care routine with zero waste alternatives. From biodegradable waste bags to refillable food containers, discover products that reduce your pet's environmental impact.",
      date: "August 28, 2025",
      readTime: "7 min read",
      author: "SustainYourPet Team",
      tags: ["Zero Waste", "Pet Care", "Eco-Friendly", "Sustainable Living"],
      slug: "zero-waste-pet-care-guide"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                <a href="/">SustainYourPet</a>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="/products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
              <a href="/blog" className="text-green-600 font-medium">Blog</a>
              <a href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainable Pet Care Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides, reviews, and tips for eco-conscious pet parents who want the best for their pets and the planet.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Sustainable Pet Care
          </h3>
          <p className="text-green-100 mb-8">
            Get the latest guides, reviews, and eco-friendly tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

