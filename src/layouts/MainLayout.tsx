import { Outlet, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Headers", path: "/headers" },
  { name: "Footers", path: "/footers" },
  { name: "Cards", path: "/cards" },
  { name: "Heros", path: "/heros" },
  { name: "Categories", path: "/categories" },
]

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">MyWebsite</h1>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64">
                <div className="mt-6 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-base font-medium ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}

                  <Button className="mt-4 w-full">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} E-COM All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
