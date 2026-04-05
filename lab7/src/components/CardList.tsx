import CardItem from './CardItem'

interface Props {
  items: any[]
  type: string
  onEdit?: (item: any) => void
  onDelete?: (id: number) => void
}

export default function CardList({ items, type, onEdit, onDelete }: Props) {
  return (
    <div className="cards-grid">
      {items.map((item) => (
        <CardItem key={item.id || item.email} item={item} type={type} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}