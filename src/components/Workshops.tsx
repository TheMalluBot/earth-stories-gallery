
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const workshops = [
  {
    id: 1,
    title: 'Mastering Natural Light',
    description: 'Learn to use natural light to create stunning landscape and wildlife photography in various conditions.',
    date: 'June 15-16, 2024',
    location: 'Yosemite National Park, CA',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    spots: '3 spots left'
  },
  {
    id: 2,
    title: 'Wildlife Photography Expedition',
    description: 'Join an immersive safari-style workshop focused on capturing wildlife in their natural habitats.',
    date: 'July 10-14, 2024',
    location: 'Glacier National Park, MT',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    spots: '5 spots left'
  },
  {
    id: 3,
    title: 'Advanced Editing Techniques',
    description: 'Take your post-processing skills to the next level with this hands-on workshop on photo editing.',
    date: 'August 5, 2024',
    location: 'Online (Live Workshop)',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    spots: 'Unlimited spots'
  }
];

const testimonials = [
  {
    id: 1,
    quote: "This workshop completely transformed my approach to nature photography. Worth every penny!",
    author: "Jessica K.",
    role: "Amateur Photographer"
  },
  {
    id: 2,
    quote: "I've attended many photography workshops, but none as hands-on and insightful as this one.",
    author: "Michael T.",
    role: "Travel Blogger"
  },
  {
    id: 3,
    quote: "The techniques I learned have elevated my work to a professional level. Highly recommended!",
    author: "David L.",
    role: "Landscape Photographer"
  }
];

const Workshops = () => {
  return (
    <section id="workshops" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading text-3xl md:text-4xl font-serif font-bold mb-4">Photography Workshops</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join me on guided photography adventures to enhance your skills and capture stunning images
          </p>
        </div>

        <div className="workshops-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="workshop-card overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">{workshop.title}</CardTitle>
                <CardDescription>{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 flex-grow">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">{workshop.date}</p>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">{workshop.location}</p>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">{workshop.price}</p>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <p className="text-sm">{workshop.spots}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Reserve Your Spot</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="testimonials-container bg-muted/30 rounded-lg p-8 mb-12">
          <h3 className="section-heading text-2xl font-serif font-bold mb-6 text-center">What Participants Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item text-center">
                <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <Separator className="mx-auto w-12 mb-4" />
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="section-heading text-2xl font-serif font-bold mb-4">Ready to elevate your photography skills?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join one of our upcoming workshops or request a custom session for personalized guidance.
          </p>
          <Button size="lg" className="contact-element">View All Workshops</Button>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
