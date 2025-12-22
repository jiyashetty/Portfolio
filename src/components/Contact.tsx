import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Return null to hide the component completely
  return null
}

export default Contact