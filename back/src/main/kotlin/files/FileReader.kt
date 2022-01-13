package files

import java.io.File
import java.util.*
import kotlin.math.min

object FileReader {
    object Constants{
        const val delimiters = " .,?!"
    }
    val wordInfos: Queue<WordInfo> = LinkedList()

    fun processFile(file: File, keywords: List<String>){
        file.bufferedReader().useLines {
            it.forEachIndexed{ lineIndex, line ->
                val text = line.split(' ')
                text.forEachIndexed { indexText, word ->
                    word.trim(*Constants.delimiters.toCharArray())
                    keywords.forEachIndexed { index, keyword ->
                        if (word.contains(keyword)) {
                            val contexts = text.subList(indexText - min(2, indexText), indexText + min(3, text.size - indexText)).toString()
                            wordInfos.add(WordInfo(lineIndex, indexText, word, contexts))
                        }
                    }
                }
            }
        }
    }
}