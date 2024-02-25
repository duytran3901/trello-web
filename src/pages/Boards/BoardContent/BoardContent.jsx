import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
  pointerWithin,
  rectIntersection,
  getFirstCollision,
  closestCenter,
  PointerSensor
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState, useCallback, useRef } from 'react'
import { cloneDeep, over } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  // Yêu cầu kéo 10px thì kích hoạt drag drop
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragStart = () => {
    
  }

  const handleDragOver = () => {
    
  }

  const handleDragEnd = (e) => {
    console.log('handleDragEnd: ', e)

    const { active, over } = e
    if (!over) return

    if (active.id !== over.id) {
      // Lấy vị trí cũ (từ active)
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      // Lấy vị trí mới (từ active)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      console.log(oldIndex);
      console.log(newIndex);

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

      console.log(dndOrderedColumns);
      // dndOrderedColumnsIds để sau này xử lý gọi api
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns} />
        {/* <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay> */}
      </Box>
    </DndContext>
  )
}

export default BoardContent
