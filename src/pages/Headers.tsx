import HeaderOne from "@/components/headers/HeaderOne"
import HeadersThree from "@/components/headers/HeadersThree"
import HeadersFour from "@/components/headers/HeadersFour"
import HeadersFive from "@/components/headers/HeadersFive"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeadersTwo from "@/components/headers/HeadersTwo"

const headers = [
  { title: "Header One", component: <HeaderOne /> },
  { title: "Header Two", component: <HeadersTwo /> },
  { title: "Header Three", component: <HeadersThree /> },
  { title: "Header Four", component: <HeadersFour /> },
  { title: "Header Five", component: <HeadersFive /> },
]

const Headers = () => {
  return (
    <section className="container mx-auto space-y-8 py-10">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Header Variants</h1>
        <p className="text-sm text-muted-foreground">
          Using <code>data/categories-tree.json</code> to generate dynamic
          navigation.
        </p>
      </div>

      {/* Header Preview List */}
      <div className="grid gap-6">
        {headers.map((item, index) => (
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

export default Headers
