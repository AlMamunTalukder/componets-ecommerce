
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer1 from "@/components/footers/Footer1"
import Footer2 from "@/components/footers/Footer2"
import Footer3 from "@/components/footers/Footer3"
import Footer4 from "@/components/footers/Footer4"
import Footer5 from "@/components/footers/footer5"

const footers = [
  { title: "Footer One", component: <Footer1 /> },
  { title: "Footer Two", component: <Footer2 /> },
  { title: "Footer Three", component: <Footer3 /> },
  { title: "Footer Four", component: <Footer4 /> },
  { title: "Footer Five", component: <Footer5 /> },
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
