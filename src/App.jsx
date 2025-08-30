import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Leaf, Heart, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import ecoRopeToys from './assets/eco-rope-toys.jpg'
import oceanToy from './assets/ocean-collection-toy.jpg'
import naturalDogFood from './assets/natural-dog-food.jpg'
import naturalPetFood from './assets/natural-pet-food.jpg'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const featuredProducts = [
    {
      id: 1,
      name: "Natural Cotton Rope Toys",
      category: "toys",
      price: "$24.99",
      rating: 4.8,
      reviews: 127,
      image: ecoRopeToys,
      description: "100% biodegradable cotton rope toys perfect for small and medium dogs. Durable, safe, and eco-friendly.",
      features: ["Biodegradable", "Non-toxic", "Durable"],
      affiliateLink: "#"
    },
    {
      id: 2,
      name: "Ocean Collection Eco Toy",
      category: "toys",
      price: "$18.99",
      rating: 4.6,
      reviews: 89,
      image: oceanToy,
      description: "Made from recycled ocean plastic, this turtle toy helps clean our oceans while entertaining your pet.",
      features: ["Recycled Materials", "Ocean-Safe", "Interactive"],
      affiliateLink: "#"
    },
    {
      id: 3,
      name: "PowerFood Grain-Free",
      category: "food",
      price: "$49.99",
      rating: 4.9,
      reviews: 203,
      image: naturalDogFood,
      description: "Premium grain-free dog food made with natural ingredients and sustainable packaging.",
      features: ["Grain-Free", "Natural Ingredients", "Sustainable"],
      affiliateLink: "#"
    },
    {
      id: 4,
      name: "Natural Pet Food Mix",
      category: "food",
      price: "$32.99",
      rating: 4.7,
      reviews: 156,
      image: naturalPetFood,
      description: "Pure and simple pet food made with organic ingredients and eco-friendly packaging.",
      features: ["Organic", "Pure & Simple", "Eco-Packaging"],
      affiliateLink: "#"
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">SustainYourPet</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
              <a href="#reviews" className="text-gray-700 hover:text-green-600 transition-colors">Reviews</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Sustainable Pet Products for a 
            <span className="text-green-600"> Greener Future</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover eco-friendly pet products that are good for your furry friends and the planet. 
            From biodegradable toys to organic food, we review the best sustainable options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Read Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Sustainable */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Sustainable Pet Products?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Eco-Friendly</h4>
              <p className="text-gray-600">Reduce your pet's environmental pawprint with biodegradable and recycled materials.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Safe & Natural</h4>
              <p className="text-gray-600">Non-toxic, chemical-free products that are safer for your pets and family.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Better Health</h4>
              <p className="text-gray-600">Natural ingredients and materials promote better health and wellbeing for your pets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Featured Sustainable Products
          </h3>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              <Button 
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </Button>
              <Button 
                variant={selectedCategory === 'toys' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('toys')}
              >
                Toys
              </Button>
              <Button 
                variant={selectedCategory === 'food' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('food')}
              >
                Food
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {product.price}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View Product Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Sustainable Pet Products
          </h3>
          <p className="text-green-100 mb-8">
            Get the latest reviews, eco-friendly tips, and exclusive deals delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <h4 className="text-lg font-semibold">SustainYourPet</h4>
              </div>
              <p className="text-gray-400">
                Your trusted source for sustainable and eco-friendly pet products.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Eco Toys</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Natural Food</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainable Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organic Treats</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">
                Questions about sustainable pet products? We're here to help!
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SustainYourPet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

