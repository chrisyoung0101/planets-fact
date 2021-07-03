import { BiPlanet } from 'react-icons/bi';

export default {
  // computer name
  name: 'planet',
  // visible title in the UI
  title: 'Planet',
  type: 'document',
  icon: BiPlanet,
  fields: [
    {
      name: 'name',
      title: 'Planet Name',
      type: 'string',
      description: 'Name of the planet',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        // source of the slug comes from the name field.  auto generated.
        source: 'name',
        maxLength: 100,
      },
    },
    /// /////////////////
    // OVERVIEW PAGE ///
    /// /////////////////

    {
      name: 'overviewImage',
      title: 'Overview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'overviewContent',
      title: 'Overview Content',
      type: 'text',
    },
    {
      name: 'overviewSource',
      title: 'Overview Source URL',
      type: 'string',
    },
    /// //////////////////////////
    // INTERNAL STRUCTURE PAGE ///
    /// //////////////////////////
    {
      name: 'internalStructureImage',
      title: 'Internal Structure Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'internalStructureContent',
      title: 'Internal Structure Content',
      type: 'text',
    },
    {
      name: 'internalStructureSource',
      title: 'Internal Structure URL',
      type: 'string',
    },
    /// //////////////////////////
    // SURFACE GEOLOGY PAGE //////
    /// //////////////////////////
    {
      name: 'surfaceGeologyImage',
      title: 'Surface Geology Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'surfaceGeologyContent',
      title: 'Surface Geology Content',
      type: 'text',
    },
    {
      name: 'surfaceGeologySource',
      title: 'Surface Geology URL',
      type: 'string',
    },
    /// /////////////////////
    // FACTS FOOTER BOXES ///
    /// /////////////////////
    {
      name: 'rotationTime',
      title: 'Rotation Time',
      type: 'string',
    },
    {
      name: 'revolutionTime',
      title: 'Revolution Time',
      type: 'string',
    },
    {
      name: 'radius',
      title: 'Radius',
      type: 'string',
    },
    {
      name: 'averageTemp',
      title: 'Average Temp',
      type: 'string',
    },
  ],
};
