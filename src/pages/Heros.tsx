
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Hero1 } from "@/components/heros/Hero1"
import { Hero2 } from "@/components/heros/Hero2"
import { Hero4 } from "@/components/heros/Hero4"
import { HeroCorporate } from "@/components/heros/Hero5"
import Hero3 from "@/components/heros/Hero3"

const footers = [
  { title: "Hero Gadget", component: <Hero1 /> },
  { title: "Hero Fashion", component: <Hero2 /> },
  { title: "Hero Grocery", component: <Hero3/> },
  { title: "Hero Ecommerce", component: <Hero4 /> },
  { title: "Hero General", component: <HeroCorporate /> },
] 

const Heros = () => {
  return (
    <section className="container mx-auto space-y-8 py-10">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Footer Variants</h1>
        <p className="text-sm text-muted-foreground">
          Using <code>data/categories-tree.json</code> to generate dynamic
          navigation.
        </p>
      </div>

      {/* Header Preview List */}
      <div className="grid gap-6">
        {footers.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>

            <CardContent className="border-t p-0">{item.component}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Heros
