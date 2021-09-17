import * as React from "react"
import { View } from "react-native"
import Svg, { G, Path } from "react-native-svg"

export default function Pescatarian({customHeight=50, customWidth=50, ...props}) {
  return (
    <View
        style={{
          height: customHeight,
          width: customWidth
        }}
    >
      <Svg 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 512 512" 
          {...props}
      >
        <G fill="#ffd07d">
          <Path d="M349.904 70.799C288.91 78.862 142.13 96.341 153.58 182.958c21.974 166.211 377.016 233.467 346.543 2.978-9.685-73.265-76.954-124.824-150.219-115.137z" />
          <Path d="M215.583 187.602c53.387 30.58 182.592 102.388 139.166 178.202-83.33 145.48-437.372 73.153-321.817-128.59 36.732-64.126 118.524-86.344 182.651-49.612z" />
        </G>
        <Path d="M510.034 184.626C505 146.545 485.433 112.7 454.938 89.327c-30.495-23.375-68.262-33.47-106.343-28.439l-3.822.504c-60.988 8.023-186.609 24.56-200.559 98.641-48.11 1.702-94.319 27.457-119.956 72.213-36.539 63.793-25.099 110.011-9.068 137.55 15.016 25.796 40.861 47.203 74.738 61.905 31.182 13.533 67.101 20.675 103.946 20.674.352 0 .708 0 1.06-.002 76.428-.283 139.416-30.79 168.493-81.605 4.949-8.649 8.088-17.473 9.436-26.45 46.252-.79 84.851-16.154 109.144-43.586 25.044-28.281 34.474-67.345 28.027-116.106zm-42.995 102.851c-20.456 23.099-53.744 36.036-94.113 36.835-1.965-13.947-8.073-28.2-18.322-42.677-14.758-20.847-37.591-41.596-69.8-63.432-4.571-3.098-10.787-1.905-13.885 2.665-3.098 4.57-1.904 10.786 2.665 13.885 69.149 46.879 93.538 89.3 72.489 126.085-25.487 44.541-82.015 71.285-151.213 71.541-.328.002-.645.002-.973.002-71.295-.003-136.086-29.129-161.418-72.644-19.19-32.966-16.03-73.615 9.138-117.554 33.939-59.252 109.755-79.847 169.009-45.907 4.79 2.742 10.899 1.085 13.643-3.706 2.744-4.791 1.085-10.9-3.706-13.644-17.777-10.181-36.838-16.127-56.012-18.174 6.024-23.273 29.46-42.178 69.82-56.249 38.784-13.522 83.459-19.4 113.021-23.29l3.834-.505c32.788-4.342 65.303 4.36 91.561 24.485 26.257 20.126 43.104 49.264 47.439 82.051 5.651 42.761-2.147 76.485-23.177 100.233zM247.11 194.305z" />
        <Path d="M247.113 194.309l-5.2 8.535 5.197-8.537c-.013-.008-.024-.017-.037-.024-4.711-2.841-10.837-1.341-13.7 3.364-2.871 4.717-1.375 10.867 3.341 13.737.138.084.277.166.415.244a9.993 9.993 0 0013.621-3.783c2.69-4.758 1.057-10.78-3.637-13.536z" />
        <Path d="M247.111 194.307h.004v.002h-.004zM454.335 146.572a104.072 104.072 0 00-42.86-37.154c-17.959-8.425-37.89-11.498-57.641-8.888-5.473.725-9.324 5.748-8.6 11.221.724 5.474 5.753 9.323 11.221 8.601 31.729-4.196 63.593 10.399 81.159 37.184 6.928 10.565 11.286 22.324 12.957 34.951.665 5.029 4.958 8.688 9.898 8.687.437 0 .879-.028 1.323-.087 5.474-.725 9.324-5.748 8.6-11.221-2.067-15.63-7.469-30.197-16.057-43.294zM404.621 216.203l-.471.063c-5.473.728-9.32 5.753-8.594 11.226.668 5.026 4.961 8.682 9.897 8.682.438 0 .882-.028 1.329-.088l.471-.063c5.473-.728 9.32-5.753 8.594-11.226-.727-5.473-5.751-9.324-11.226-8.594zM310.715 165.588l-.471.063c-5.473.727-9.32 5.753-8.594 11.225.668 5.026 4.961 8.682 9.897 8.682.439 0 .882-.028 1.329-.088l.471-.063c5.473-.727 9.32-5.753 8.594-11.225-.727-5.473-5.751-9.322-11.226-8.594zM204.383 227.268c2.744-4.791 1.086-10.9-3.706-13.644-17.286-9.901-36.895-14.602-56.709-13.621a104.102 104.102 0 00-53.745 18.139c-12.913 8.866-23.432 20.299-31.267 33.977-2.744 4.791-1.086 10.9 3.706 13.644a9.995 9.995 0 0013.643-3.705c6.33-11.051 14.82-20.282 25.235-27.432 26.409-18.128 61.423-19.561 89.2-3.651 4.792 2.741 10.9 1.084 13.643-3.707zM110.251 301.656l-.412-.236c-4.788-2.746-10.898-1.092-13.645 3.699-2.747 4.789-1.091 10.899 3.699 13.645l.412.236a9.993 9.993 0 0013.644-3.698c2.747-4.79 1.091-10.9-3.698-13.646zM170.201 369.488l-.412-.236c-4.789-2.747-10.898-1.091-13.646 3.699-2.746 4.789-1.091 10.899 3.699 13.645l.412.236a9.993 9.993 0 0013.644-3.698c2.749-4.791 1.092-10.9-3.697-13.646zM216.333 290.409l-.412-.236c-4.79-2.747-10.899-1.091-13.645 3.699-2.746 4.789-1.091 10.899 3.699 13.645l.412.236a9.993 9.993 0 0013.644-3.698c2.748-4.79 1.092-10.9-3.698-13.646zM265.385 357.651c-2.746 4.789-1.091 10.899 3.699 13.645l.412.236a9.993 9.993 0 0013.644-3.698c2.746-4.789 1.091-10.899-3.699-13.645l-.412-.236c-4.787-2.747-10.898-1.092-13.644 3.698z" />
      </Svg>
    </View>
  )
}