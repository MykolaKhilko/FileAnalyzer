package files

import java.io.File

class FileFinder {

    val WordInfos = mutableListOf<WordInfo>()
    var KeyWordsMap = mutableMapOf<String, Int>()

    fun processDirectory(dirPath: String, names: List<String>?, exts: List<String>?) : List<File>{
        var patterns = mutableListOf<String>()

        if (names != null && exts != null){
            exts.forEach{ ext ->
                names.forEach{name ->
                    patterns.add(name + ext)
                }
            }
        }
        else if (names != null)
            patterns = names as MutableList<String>
        else if (exts != null)
            patterns = exts as MutableList<String>

        return walkDirectory(dirPath, patterns)
    }

    private fun walkDirectory(dirPath: String, patterns: List<String>): List<File> {
        val dir = File(dirPath)
        require(dir.exists() && dir.isDirectory)

        val files = dir.walkTopDown().toList().filter { it.isFile }

        if (patterns.isNotEmpty()) {
            patterns.forEach() { pattern: String ->
                files.filter {
                    it.name.contains(pattern)
                }
            }
        }
        return files
    }
}