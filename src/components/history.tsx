import { useHistory } from "../hooks/use-history";

export function HistoryComponent() {
  const { history } = useHistory()

  return (
    <pre>
      {JSON.stringify(history, null, 2)}
    </pre>
  )
}