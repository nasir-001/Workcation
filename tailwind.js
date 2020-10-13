module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      'spacing': {
        '72': '18rem',
        '80': '20rem',
      }
    },
  },
  variants: {},
  theme: {
    customForms: theme => ({
      default: {
        checkbox: {
          icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>'
        },
        radio: {
          icon: '<svg fill="#fff" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>'
        },
        // input: {
        //   borderRadius: theme('borderRadius.lg'),
        //   backgroundColor: theme('colors.gray.200'),
        //   '&:focus': {
        //     backgroundColor: theme('colors.white'),
        //   }
        // },
        select: {
          icon: '<svg fill="#e2e8f0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
          iconColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          borderColor: 'transparent',
          lineHeight: theme('lineHeight.snug'),
          // '&:fucos': {
          //   borderColor: 'transparent',
          //   fucosShadow: 'none',
          //   backgroundColor: theme('colors.gray.600')
          // },
          // boxShadow: theme('boxShadow.default'),
        },
        radio: {
          width: theme('spacing.5'),
          height: theme('spacing.5'),
          borderColor: 'transparent',
          backgroundColor: theme('colors.gray.900'),
          '&:checked': {
            backgroundColor: theme('colors.indigo.500')
          },
        },
        checkbox: {
          width: theme('spacing.5'),
          height: theme('spacing.5'),
          borderColor: 'transparent',
          backgroundColor: theme('colors.gray.900'),
          '&:checked': {
            backgroundColor: theme('colors.indigo.500')
          },
        },
      },
    })
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
