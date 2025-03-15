package org.example.sweetea.ui.components

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.*
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.drawIntoCanvas
import androidx.compose.ui.graphics.drawscope.rotate
import androidx.compose.ui.graphics.nativeCanvas
import androidx.compose.ui.text.TextMeasurer
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.drawText
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin

@Composable
fun CustomCircularProgressIndicator(
    modifier: Modifier = Modifier,
    primaryColor: Color,
    secondaryColor:Color,
    minValue:Int = 0,
    maxValue:Int = 75,
    circleRadius:Float,
    positionValue: Int = 0,
    onPositionChange:(Int)->Unit = {}
) {
    var circleCenter by remember {
        mutableStateOf(Offset.Zero)
    }
    var textMeasurer = rememberTextMeasurer()
    val colorScheme = MaterialTheme.colorScheme
    Box(
        modifier = modifier
    ){
        Canvas(
            modifier = Modifier
                .fillMaxSize()
        ){
            val width = size.width
            val height = size.height
            val circleThickness = width / 25f
            circleCenter = Offset(x = width/2f, y = height/2f)



            drawCircle(
                brush = Brush.radialGradient(
                    listOf(
                        primaryColor,//.copy(0.45f),
                        secondaryColor//.copy(0.15f)
                    )
                ),
                radius = circleRadius,
                center = circleCenter
            )


            drawCircle(
                style = Stroke(
                    width = circleThickness
                ),
                color = secondaryColor,
                radius = circleRadius,
                center = circleCenter
            )

            drawArc(
                color = primaryColor,
                startAngle = 90f,
                sweepAngle = (360f/maxValue) * positionValue.toFloat(),
                style = Stroke(
                    width = circleThickness,
                    cap = StrokeCap.Round
                ),
                useCenter = false,
                size = Size(
                    width = circleRadius * 2f,
                    height = circleRadius * 2f
                ),
                topLeft = Offset(
                    (width - circleRadius * 2f)/2f,
                    (height - circleRadius * 2f)/2f
                )

            )

            val outerRadius = circleRadius + circleThickness/2f
            val gap = 15f
            for (i in 0 .. (maxValue-minValue)){
                val color = if(i < positionValue-minValue) primaryColor else secondaryColor
                val angleInDegrees = i*360f/(maxValue-minValue).toFloat()
                val angleInRad = angleInDegrees * PI / 180f + PI/2f

                val yGapAdjustment = cos(angleInDegrees * PI / 180f)*gap
                val xGapAdjustment = -sin(angleInDegrees * PI / 180f)*gap

                val start = Offset(
                    x = (outerRadius * cos(angleInRad) + circleCenter.x + xGapAdjustment).toFloat(),
                    y = (outerRadius * sin(angleInRad) + circleCenter.y + yGapAdjustment).toFloat()
                )

                val end = Offset(
                    x = (outerRadius * cos(angleInRad) + circleCenter.x + xGapAdjustment).toFloat(),
                    y = (outerRadius * sin(angleInRad) + circleThickness + circleCenter.y + yGapAdjustment).toFloat()
                )

                rotate(
                    angleInDegrees,
                    pivot = start
                ){
                    drawLine(
                        color = color,
                        start = start,
                        end = end,
                        strokeWidth = 1.dp.toPx()
                    )
                }

            }

            drawContext.canvas.nativeCanvas.apply {
                drawIntoCanvas {
                    drawText(
                        textMeasurer = textMeasurer,
                        text = "$positionValue",
                        topLeft = Offset(circleCenter.x - 38.sp.toPx() / 3, circleCenter.y - 38.sp.toPx() / 2),
                        style = TextStyle(
                            fontSize = 38.sp,
                            textAlign = TextAlign.Center,
                            color = colorScheme.inverseOnSurface,
                        )
                    )
                }
            }

        }
    }
}