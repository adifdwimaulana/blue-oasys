import Layout from '@/components/layout'
import MixingTable from '@/components/mixing-table'

export default function Home() {
  return (
    <Layout title="Mixing Planner" breadcumb='Mixing Planner'>
      <MixingTable />
    </Layout>
  )
}
