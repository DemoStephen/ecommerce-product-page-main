import Trend from "./Trend";

export default function TrendingNow() {
  return (
    <section className="p-[2.5%]">
      <h2 className="text-2xl font-semibold my-4">Trending Now</h2>
      <div className="grid grid-cols-3 gap-6 text-center md:grid-cols-6">
        <Trend
          img="https://images.unsplash.com/photo-1700748911489-0552c576f274?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Running shoes"
        />
        <Trend
          img="https://images.unsplash.com/photo-1623970437305-af22610a0f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8"
          name="Running shoes"
        />
        <Trend
          img="https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Running shoes"
        />
        <Trend
          img="https://images.unsplash.com/photo-1623970437305-af22610a0f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8"
          name="Running shoes"
        />
        <Trend
          img="https://images.unsplash.com/photo-1700748911489-0552c576f274?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Running shoes"
        />
        <Trend
          img="https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Running shoes"
        />
      </div>
    </section>
  );
}
