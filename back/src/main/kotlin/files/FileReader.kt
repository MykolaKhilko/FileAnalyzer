package files

import java.io.File
import java.util.*
import kotlin.math.min

class FileReader(val keywords: List<String>) {

    var found: Int = 0

    object Constants{
        const val delimiters = " .,?!"
    }

    fun processFile(file: File) : FileInfo{
        val wordInfos = mutableListOf<WordInfo>()
        file.bufferedReader().useLines {
            it.forEachIndexed{ lineIndex, line ->
                val text = line.split(' ')
                text.forEachIndexed { textIndex, word ->
                    word.trim(*Constants.delimiters.toCharArray())
                    keywords.forEach{ keyword ->
                        if (word.contains(keyword)) {
                            val contexts = text.subList(textIndex - min(2, textIndex), textIndex + min(3, text.size - textIndex)).toString()
                            wordInfos.add(WordInfo(lineIndex, textIndex, word, contexts))
                            found += 1
                        }
                    }
                }
            }
        }
        return FileInfo(file.name, file.absolutePath, wordInfos)
    }
}