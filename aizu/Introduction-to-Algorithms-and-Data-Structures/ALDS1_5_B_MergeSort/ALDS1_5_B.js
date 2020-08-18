"use strict"

let cnt = 0
const mergeSort = (xs, left, right) => {
  if (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    mergeSort(xs, left, mid)
    mergeSort(xs, mid, right)
    merge(xs, left, mid, right)
  }
}
const merge = (xs, left, mid, right) => {
  const n1 = mid - left
  const n2 = right - mid
  const ls = []
  for (let i = 0; i < n1; i++) {
    ls[i] = xs[left + i]
  }
  ls.push(1000000000)
  const rs = []
  for (let i = 0; i < n2; i++) {
    rs[i] = xs[mid + i]
  }
  rs.push(1000000000)
  let i = 0
  let j = 0
  for (let k = left; k < right; k++) {
    cnt++
    if (ls[i] < rs[j]) {
      xs[k] = ls[i]
      i++
    } else {
      xs[k] = rs[j]
      j++
    }
  }
}

const solver = (n, xs) => {
  mergeSort(xs, 0, n)
  return xs
}

let rows = 0
let n = 0
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})
reader.on("line", (line) => {
  rows++
  if (rows === 1) {
    n = Number(line.trim())
  } else {
    const xs = line.trim().split(" ").map(x => Number(x))
    const result = solver(n, xs)
    console.log(result.reduce((acc, x) => `${acc} ${x}`))
    console.log(cnt)
    process.exit(0)
  }
})
