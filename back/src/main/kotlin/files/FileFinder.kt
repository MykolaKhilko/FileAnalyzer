package files

import java.io.File

class FileFinder {

    fun processDirectory(dirPath: String, keywords: List<String>) : List<FileInfo>{
        val files = walkDirectory(dirPath)
        return files.map { FileReader.processFile(it, keywords) }.toList()
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