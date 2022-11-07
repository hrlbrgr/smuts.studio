import { useState, useEffect } from "react"
import Head from "next/head"
import confetti from "canvas-confetti"

function yay() {
  var duration = 15 * 1000
  var animationEnd = Date.now() + duration
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    var particleCount = 50 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    )
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    )
  }, 250)
}

export default function Void() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const rows = Math.floor(h / 100)
      const cols = Math.floor(w / 100)
      const map = []
      for (let i = 0; i < rows; i++) {
        map[i] = []
        for (let j = 0; j < cols; j++) {
          map[i][j] = "default"
        }
      }
      const target = [(Math.random() * rows) | 0, (Math.random() * cols) | 0]
      map[target[0]][target[1]] = "goal"
      function move(i, j, d) {
        if (map[i][j] !== "default" && d) {
          return
        }
        if (d) {
          map[i][j] = d
        }
        const m = []
        if (i > 0) m.push([i - 1, j, "↓"])
        if (j > 0) m.push([i, j - 1, "→"])
        if (i < rows - 1) m.push([i + 1, j, "↑"])
        if (j < cols - 1) m.push([i, j + 1, "←"])
        for (let i = 0; i < 12; i++) {
          const a = (Math.random() * m.length) | 0
          const b = (Math.random() * m.length) | 0
          const c = m[a]
          m[a] = m[b]
          m[b] = c
        }
        for (let i = 0; i < m.length; i++) {
          move(...m[i])
        }
      }
      move(target[0], target[1])
      setRows(map)
    }
    window.addEventListener("resize", resize)
    resize()
    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>&#65279;</title>
        <link
          rel="icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          type="image/png"
        ></link>
      </Head>
      <style jsx global>{`
        html,
        body,
        #__next {
          margin: 0;
          font-size: 0;
        }
      `}</style>
      <style jsx>{`
        .block {
          display: inline-block;
          width: 100px;
          height: 100px;
        }
        .→ {
          cursor: e-resize;
        }
        .↑ {
          cursor: n-resize;
        }
        .↓ {
          cursor: s-resize;
        }
        .← {
          cursor: w-resize;
        }
        .goal {
          cursor: pointer;
        }
      `}</style>
      <div>
        {rows.map((row, i) => {
          return (
            <div key={i}>
              {row.map((col, j) => {
                if (col === "goal") {
                  return <div className="block goal" onClick={() => yay()} />
                }
                return <div className={"block " + col} key={"c-" + j} />
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
