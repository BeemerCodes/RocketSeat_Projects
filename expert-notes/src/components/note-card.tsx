export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-3 00">Há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti neque
        ducimus, repellendus, facere accusantium quod dolor dolores soluta ex
        modi perspiciatis odio, eveniet inventore nobis iusto ipsum animi
        voluptatem? Sunt!.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </button>
  );
}
