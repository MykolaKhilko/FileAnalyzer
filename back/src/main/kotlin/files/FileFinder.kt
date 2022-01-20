package files

import java.io.File

class FileFinder {

    val WordInfos = mutableListOf<WordInfo>()
    var KeyWordsMap = mutableMapOf<String, Int>()

    fun processDirectory(dirPath: String, keywords: List<String>) : List<FileInfo>{
        val files = walkDirectory(dirPath)
        return files.map {
            FileReader.processFile(it, keywords) { info ->
                KeyWordsMap.compute(info.match) { _, oldValue -> oldValue?.plus(1) ?: 1 }
            }
        }.toList()
    }

    fun walkDirectory(dirPath: String, pattern: Regex): List<File> {
        val dir = File(dirPath)
        require(dir.exists() && dir.isDirectory())
        return dir.walkTopDown().toList().filter { it.name.matches(pattern) && !it.isDirectory }
    }

    fun walkDirectory(dirPath: String) : Sequence<File>{
        val dir = File(dirPath)
        require(dir.exists() && dir.isDirectory())
        return dir.walkTopDown().iterator().asSequence().filterNot { it.isDirectory }
    }
}