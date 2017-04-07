export default function(originalObject, circular){
  // First create an empty object with
  // same prototype of our original source

  var propertyIndex,
      descriptor,
      keys,
      current,
      nextSource,
      indexOf,
      copies = [ {
          source: originalObject,
          target: Object.create( Object.getPrototypeOf( originalObject ) )
      } ],
      cloneObject = copies[ 0 ].target,
      sourceReferences = [ originalObject ],
      targetReferences = [ cloneObject ];

  // First in, first out
  /* eslint-disable */
  while ( current = copies.shift() ){
    /* eslint-enable */
      keys = Object.getOwnPropertyNames( current.source );

      for ( propertyIndex = 0; propertyIndex < keys.length; propertyIndex++ )
      {
          // Save the source's descriptor
          descriptor = Object.getOwnPropertyDescriptor( current.source, keys[ propertyIndex ]);

          if ( !descriptor.value || typeof descriptor.value !== 'object' )
          {
              Object.defineProperty( current.target, keys[ propertyIndex ], descriptor );
              continue;
          }
          // CUSTOM: We don't neet to deep copy objects, which got a clone method
          if(typeof descriptor.value.clone !== 'undefined'){
            descriptor.value = descriptor.value.clone(true);
            Object.defineProperty(current.target, keys[ propertyIndex ], descriptor);
            continue;
          }
          nextSource = descriptor.value;

          descriptor.value = Array.isArray( nextSource ) ?
              [] :
              Object.create( Object.getPrototypeOf( nextSource ) );

          if ( circular ){
              indexOf = sourceReferences.indexOf( nextSource );

              if ( indexOf !== -1 )
              {
                  // The source is already referenced, just assign reference
                  descriptor.value = targetReferences[ indexOf ];
                  Object.defineProperty( current.target, keys[ propertyIndex ], descriptor );
                  continue;
              }

              sourceReferences.push( nextSource );
              targetReferences.push( descriptor.value );
          }

          Object.defineProperty( current.target, keys[ propertyIndex ], descriptor );

          copies.push( { source: nextSource, target: descriptor.value } );
      }
  }

  return cloneObject;
}
