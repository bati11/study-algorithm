object Main {
  def main(args: Array[String]): Unit = {
    val file = new java.io.PrintWriter("out/output_library_sort")
    var source = scala.io.Source.fromFile("out/testdata")
    source.getLines.toSeq.sorted.foreach(file.println)
    source.close()
    file.close()
  }
}