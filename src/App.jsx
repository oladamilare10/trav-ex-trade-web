import { motion } from 'framer-motion';
import { FaBitcoin, FaExchangeAlt, FaShieldAlt, FaEthereum, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsCurrencyExchange, BsCurrencyDollar, BsStarFill } from 'react-icons/bs';
import { SiLitecoin, SiRipple } from 'react-icons/si';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');

  const cryptoPrices = {
    BTC: 32450000,
    ETH: 4500000,
    LTC: 180000,
    XRP: 950
  };

  const calculateNaira = () => {
    if (!amount) return '0.00';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount * cryptoPrices[selectedCrypto]);
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <header className="container py-20">
        <nav className="flex justify-between items-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            TravExTrade
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6"
          >
            <button className="btn btn-outline">Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </motion.div>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Trade Crypto to Naira <span className="gradient-text">Instantly</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Experience seamless cryptocurrency trading with instant Naira conversions. 
              Fast, secure, and reliable platform for all your crypto needs.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">Start Trading</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-400">Current Bitcoin Price</p>
                  <h3 className="text-2xl font-bold">₦32,450,000</h3>
                </div>
                <FaBitcoin className="text-4xl text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p>24h Change: +2.5%</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p>Volume: ₦1.2B</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trading Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Start Trading Now</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Convert your cryptocurrency to Naira with our real-time calculator
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Conversion Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Convert</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Select Cryptocurrency</label>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { id: 'BTC', icon: FaBitcoin, name: 'Bitcoin' },
                    { id: 'ETH', icon: FaEthereum, name: 'Ethereum' },
                    { id: 'LTC', icon: SiLitecoin, name: 'Litecoin' },
                    { id: 'XRP', icon: SiRipple, name: 'Ripple' }
                  ].map(crypto => {
                    const Icon = crypto.icon;
                    return (
                      <button
                        key={crypto.id}
                        onClick={() => setSelectedCrypto(crypto.id)}
                        className={`card p-4 flex flex-col items-center gap-2 transition-all duration-300 ${
                          selectedCrypto === crypto.id ? 'border-primary' : 'hover:border-gray-600'
                        }`}
                      >
                        <Icon className={`text-2xl ${selectedCrypto === crypto.id ? 'text-primary' : 'text-gray-400'}`} />
                        <span className="text-xs">{crypto.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-light placeholder-gray-500 focus:outline-none focus:border-primary"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {selectedCrypto}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Estimated Value</label>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold gradient-text">{calculateNaira()}</span>
                    <span className="text-gray-400">NGN</span>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary w-full">
                Proceed to Trade
              </button>
            </div>
          </motion.div>

          {/* Live Prices */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Live Market Prices</h3>
            {Object.entries(cryptoPrices).map(([crypto, price]) => (
              <div key={crypto} className="card flex items-center justify-between p-4 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  {crypto === 'BTC' && <FaBitcoin className="text-2xl text-primary" />}
                  {crypto === 'ETH' && <FaEthereum className="text-2xl text-primary" />}
                  {crypto === 'LTC' && <SiLitecoin className="text-2xl text-primary" />}
                  {crypto === 'XRP' && <SiRipple className="text-2xl text-primary" />}
                  <div>
                    <p className="font-bold">{crypto}</p>
                    <p className="text-sm text-gray-400">
                      {crypto === 'BTC' && 'Bitcoin'}
                      {crypto === 'ETH' && 'Ethereum'}
                      {crypto === 'LTC' && 'Litecoin'}
                      {crypto === 'XRP' && 'Ripple'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">
                    {new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN'
                    }).format(price)}
                  </p>
                  <p className="text-sm text-green-500">+2.5%</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 bg-gradient-to-b from-dark to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose TravExTrade</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of crypto trading with our premium features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BsCurrencyExchange className="text-4xl text-primary" />,
              title: "Instant Exchange",
              description: "Convert your crypto to Naira instantly with competitive rates"
            },
            {
              icon: <FaShieldAlt className="text-4xl text-secondary" />,
              title: "Secure Trading",
              description: "Your assets are protected with military-grade encryption"
            },
            {
              icon: <FaExchangeAlt className="text-4xl text-primary" />,
              title: "Multiple Currencies",
              description: "Support for Bitcoin, Ethereum, and other major cryptocurrencies"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card hover:border-primary/50 transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Traders Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust TravExTrade for their crypto-to-naira needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "David Adeleke",
              role: "Crypto Trader",
              image: "https://i.pravatar.cc/150?img=1",
              quote: "The fastest and most reliable crypto-to-naira platform I've used. Their rates are unbeatable!",
              rating: 5
            },
            {
              name: "Sarah Ibrahim",
              role: "Business Owner",
              image: "https://i.pravatar.cc/150?img=5",
              quote: "TravExTrade has transformed how I receive international payments. Excellent service!",
              rating: 5
            },
            {
              name: "Michael Okonkwo",
              role: "Investment Analyst",
              image: "https://i.pravatar.cc/150?img=3",
              quote: "Secure, fast, and professional. Their customer service is top-notch.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <BsStarFill key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of traders who trust TravExTrade for their cryptocurrency transactions. 
              Get started in minutes with our simple registration process.
            </p>
            <button className="btn btn-primary">
              Create Free Account
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">TravExTrade</h3>
              <p className="text-gray-400 mb-4">
                The most trusted cryptocurrency trading platform for instant naira conversion.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Trading Fees</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">API Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Compliance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TravExTrade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
