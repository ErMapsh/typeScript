/*
Position prop can be one of
"left-center"|"left-top"|"left-bottom"|"center"|"center-top"|
"center-bottom"|"right-center"|"right-top"|"right-bottom"
*/

type HorizontalPosition = 'left'|'center'|'right'
type VerticalPosition = 'top'|'center'|'bottom'
      
type ToastProp = {
    Position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | "center"
}
export const Toast = ({Position}: ToastProp) => {
    return (
        <div>Toast Notification Position-{Position}</div>

    )
}