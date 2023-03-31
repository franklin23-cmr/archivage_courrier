import React from 'react'
import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useRecordContext } from 'react-admin';

export const ImageListCustom = () => {
  
  const recordPhoto = useRecordContext()
  const record = recordPhoto.photo
  console.log(" image list", record);

  return record ? (
    
    <ImageList
                variant="quilted"
                sx={{ width: 500, height: 450  ,  transform: 'translateZ(0)', padding: 0}} 
                cols={3} 
                rowHeight={164}
                >
                {record.map((item) => (
                  
                    <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                          src={`${item.photoURL}?w=164&h=164&fit=crop&auto=format`}
                        //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt=""
                          loading="lazy"
                    />
                    </ImageListItem>
                ))}
    </ImageList>

  
  ): null 
}
