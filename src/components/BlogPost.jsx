import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, Clock, User } from 'lucide-react'

export function BlogPost({ title, excerpt, date, readTime, author, tags, slug }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags?.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl hover:text-green-600 transition-colors">
          <a href={`/blog/${slug}`}>{title}</a>
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {excerpt}
        </CardDescription>
        <a 
          href={`/blog/${slug}`}
          className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Read More →
        </a>
      </CardContent>
    </Card>
  )
}

