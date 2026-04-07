
import { CategoryStyle1 } from "@/components/categories/categorie1"
import { CategoryStyle2 } from "@/components/categories/categorie2"
import { CategoryStyle3 } from "@/components/categories/categorie3"
import CategoryStyle4 from "@/components/categories/categorie4"
// import { CategoryStyle4 } from "@/components/categories/categorie4" 
import { CategoryStyle5 } from "@/components/categories/categorie5"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


const footers = [
  { title: "Categorie ", component: <CategoryStyle1 /> },
  { title: "Categorie ", component: <CategoryStyle2 /> },
  { title: "Categorie ", component: <CategoryStyle3 /> },
  { title: "Categorie ", component: <CategoryStyle4 /> },
  { title: "Categorie ", component: <CategoryStyle5 /> },
] 

const Categories = () => {
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


export default Categories
