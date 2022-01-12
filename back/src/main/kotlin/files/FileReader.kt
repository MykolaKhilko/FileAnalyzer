package files

import java.io.File
import kotlin.math.min

object FileReader {
    object Constants{
        const val delimiters = " .,?!"
    }

    fun processFile(file: File, keywords: List<String>): FileInfo {
        val result = mutableListOf<WordInfo>()
        file.bufferedReader().useLines {
            it.forEachIndexed{ lineIndex, line ->
                val text = line.split(' ')
                text.forEachIndexed { indexText, word ->
                    word.trim(*Constants.delimiters.toCharArray())
                    keywords.forEachIndexed { index, keyword ->
                        if (word.contains(keyword)) {
                            val contexts = text.subList(indexText - min(2, indexText), indexText + min(3, text.size - indexText)).toString()
                            result.add(WordInfo(lineIndex, indexText, word, contexts))
                        }
                    }
                }
            }
        }

        return FileInfo(file.name, file.absolutePath, result)
    }
}