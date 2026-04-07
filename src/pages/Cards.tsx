import Card1 from "@/components/cards/Card1"
import Card2 from "@/components/cards/Card2"
import Card3 from "@/components/cards/Card3"
import Card4 from "@/components/cards/Card4"
import Card5 from "@/components/cards/Card5"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const footers = [
  { title: "Card One", component: <Card1 /> },
  { title: "Card Two", component: <Card2 /> },
  { title: "Card Three", component: <Card3 /> },
  { title: "Card Four", component: <Card4 /> },
  { title: "Card Five", component: <Card5 /> },
]

const Footers = () => {
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

export default Footers
