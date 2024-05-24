import Module from "@/components/layouts/module"
import ModuleBar from "@/components/layouts/ModuleBar"
import GateModuleBar from "@/components/modules/BasicModuleBar"

export default function GateModuleLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Module bar = {
            <GateModuleBar />
        }>
            {children}
        </Module>
    )
  }
  