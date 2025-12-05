import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ContactInfoCardProps {
  icon: LucideIcon
  title: string
  lines: readonly string[]
}

export function ContactInfoCard({ icon: Icon, title, lines }: ContactInfoCardProps) {
  return (
    <Card className="group p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          {lines.map((line, idx) => (
            <p key={idx} className="text-sm text-muted-foreground">{line}</p>
          ))}
        </div>
      </div>
    </Card>
  )
}

