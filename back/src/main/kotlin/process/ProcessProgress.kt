package process

data class ProcessProgress (
    val percentage: Int,
    val done: Int,
    val all: Int,
    val timeSpent: Long,
    val foundMatches: Int,
    val finished: Boolean
)

