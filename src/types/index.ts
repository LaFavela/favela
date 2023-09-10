export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bank_account: {
        Row: {
          bank_number: number
          created_at: string
          id: number
          name: string
          password: string
        }
        Insert: {
          bank_number?: number
          created_at?: string
          id?: number
          name?: string
          password?: string
        }
        Update: {
          bank_number?: number
          created_at?: string
          id?: number
          name?: string
          password?: string
        }
        Relationships: []
      }
      channel: {
        Row: {
          client_id: string | null
          created_at: string
          id: string
          server_id: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          id?: string
          server_id?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          id?: string
          server_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "channel_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "channel_server_id_fkey"
            columns: ["server_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      design: {
        Row: {
          bathroom_count: number
          bedroom_count: number
          created_at: string | null
          created_by: string | null
          description: string
          feature: string
          floor_plan_image: string[] | null
          id: string
          name: string
          other: string[]
          preview_image: string[] | null
          price: number
          property_size: number
          property_style: number | null
          property_type: number | null
        }
        Insert: {
          bathroom_count: number
          bedroom_count: number
          created_at?: string | null
          created_by?: string | null
          description?: string
          feature?: string
          floor_plan_image?: string[] | null
          id?: string
          name?: string
          other?: string[]
          preview_image?: string[] | null
          price: number
          property_size: number
          property_style?: number | null
          property_type?: number | null
        }
        Update: {
          bathroom_count?: number
          bedroom_count?: number
          created_at?: string | null
          created_by?: string | null
          description?: string
          feature?: string
          floor_plan_image?: string[] | null
          id?: string
          name?: string
          other?: string[]
          preview_image?: string[] | null
          price?: number
          property_size?: number
          property_style?: number | null
          property_type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "design_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "design_property_style_fkey"
            columns: ["property_style"]
            referencedRelation: "property_style"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "design_property_type_fkey"
            columns: ["property_type"]
            referencedRelation: "property_type"
            referencedColumns: ["id"]
          }
        ]
      }
      education: {
        Row: {
          created_at: string
          description: string
          end_date: string
          id: string
          institution: string
          start_date: string
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string
          end_date?: string
          id?: string
          institution?: string
          start_date?: string
          title?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          end_date?: string
          id?: string
          institution?: string
          start_date?: string
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      experience: {
        Row: {
          created_at: string
          description: string
          end_date: string
          id: string
          institution: string
          start_date: string
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string
          end_date?: string
          id?: string
          institution?: string
          start_date?: string
          title?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          end_date?: string
          id?: string
          institution?: string
          start_date?: string
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      facilities_form_request: {
        Row: {
          amount: number
          created_by: string | null
          form_id: string | null
          id: string
          name: string
        }
        Insert: {
          amount: number
          created_by?: string | null
          form_id?: string | null
          id?: string
          name?: string
        }
        Update: {
          amount?: number
          created_by?: string | null
          form_id?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "facilities_form_request_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facilities_form_request_form_id_fkey"
            columns: ["form_id"]
            referencedRelation: "request_form"
            referencedColumns: ["id"]
          }
        ]
      }
      follower: {
        Row: {
          follower: string | null
          following: string | null
          id: string
        }
        Insert: {
          follower?: string | null
          following?: string | null
          id?: string
        }
        Update: {
          follower?: string | null
          following?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follower_follower_fkey"
            columns: ["follower"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follower_following_fkey"
            columns: ["following"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      kabupaten_kota: {
        Row: {
          id: number
          id_provinsi: number | null
          kabupaten: string
        }
        Insert: {
          id: number
          id_provinsi?: number | null
          kabupaten?: string
        }
        Update: {
          id?: number
          id_provinsi?: number | null
          kabupaten?: string
        }
        Relationships: [
          {
            foreignKeyName: "kabupaten_kota_id_provinsi_fkey"
            columns: ["id_provinsi"]
            referencedRelation: "provinsi"
            referencedColumns: ["id"]
          }
        ]
      }
      member_contractor: {
        Row: {
          description: string | null
          id: string
          job: string
          name: string
          user_id: string
        }
        Insert: {
          description?: string | null
          id?: string
          job: string
          name: string
          user_id?: string
        }
        Update: {
          description?: string | null
          id?: string
          job?: string
          name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "member_contractor_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      message: {
        Row: {
          channel: string | null
          content: string | null
          created_at: string
          id: string
          img: string | null
          sent_by: string | null
        }
        Insert: {
          channel?: string | null
          content?: string | null
          created_at?: string
          id?: string
          img?: string | null
          sent_by?: string | null
        }
        Update: {
          channel?: string | null
          content?: string | null
          created_at?: string
          id?: string
          img?: string | null
          sent_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_channel_fkey"
            columns: ["channel"]
            referencedRelation: "channel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_sent_by_fkey"
            columns: ["sent_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_detail: {
        Row: {
          about: string
          banner: string | null
          city: number | null
          created_at: string
          follower_count: number
          id: string
          property_style: number[]
          property_type: number[] | null
          province: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          about?: string
          banner?: string | null
          city?: number | null
          created_at?: string
          follower_count?: number
          id?: string
          property_style?: number[]
          property_type?: number[] | null
          province?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          about?: string
          banner?: string | null
          city?: number | null
          created_at?: string
          follower_count?: number
          id?: string
          property_style?: number[]
          property_type?: number[] | null
          province?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_detail_city_fkey"
            columns: ["city"]
            referencedRelation: "kabupaten_kota"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_detail_province_fkey"
            columns: ["province"]
            referencedRelation: "provinsi"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_detail_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_role: {
        Row: {
          accepted: boolean
          created_at: string
          design: string | null
          experience: string | null
          id: string
          project: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          accepted?: boolean
          created_at?: string
          design?: string | null
          experience?: string | null
          id?: string
          project?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          accepted?: boolean
          created_at?: string
          design?: string | null
          experience?: string | null
          id?: string
          project?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_role_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string
          role_id: number
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string
          role_id?: number
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string
          role_id?: number
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["id"]
          }
        ]
      }
      project: {
        Row: {
          description: string
          end_date: string
          id: string
          image: string[]
          institution: string
          start_date: string
          title: string
          user_id: string | null
        }
        Insert: {
          description?: string
          end_date?: string
          id?: string
          image?: string[]
          institution?: string
          start_date?: string
          title?: string
          user_id?: string | null
        }
        Update: {
          description?: string
          end_date?: string
          id?: string
          image?: string[]
          institution?: string
          start_date?: string
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      property_style: {
        Row: {
          id: number
          style_name: string
        }
        Insert: {
          id?: number
          style_name?: string
        }
        Update: {
          id?: number
          style_name?: string
        }
        Relationships: []
      }
      property_type: {
        Row: {
          id: number
          type_name: string
        }
        Insert: {
          id?: number
          type_name?: string
        }
        Update: {
          id?: number
          type_name?: string
        }
        Relationships: []
      }
      provinsi: {
        Row: {
          id: number
          provinsi: string
        }
        Insert: {
          id: number
          provinsi?: string
        }
        Update: {
          id?: number
          provinsi?: string
        }
        Relationships: []
      }
      request_form: {
        Row: {
          budget: number
          city: number | null
          created_at: string
          created_by: string | null
          deadline: string
          design_name: string
          id: string
          information: string
          land_image: string[]
          land_shape: string
          land_size: number
          property_style: number | null
          property_type: number | null
          province: number | null
          reference_image: string[]
          sun_orientation: string
          wind_orientation: string
        }
        Insert: {
          budget: number
          city?: number | null
          created_at?: string
          created_by?: string | null
          deadline?: string
          design_name?: string
          id?: string
          information?: string
          land_image?: string[]
          land_shape?: string
          land_size: number
          property_style?: number | null
          property_type?: number | null
          province?: number | null
          reference_image?: string[]
          sun_orientation?: string
          wind_orientation?: string
        }
        Update: {
          budget?: number
          city?: number | null
          created_at?: string
          created_by?: string | null
          deadline?: string
          design_name?: string
          id?: string
          information?: string
          land_image?: string[]
          land_shape?: string
          land_size?: number
          property_style?: number | null
          property_type?: number | null
          province?: number | null
          reference_image?: string[]
          sun_orientation?: string
          wind_orientation?: string
        }
        Relationships: [
          {
            foreignKeyName: "request_form_city_fkey"
            columns: ["city"]
            referencedRelation: "kabupaten_kota"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_form_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_form_property_style_fkey"
            columns: ["property_style"]
            referencedRelation: "property_style"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_form_property_type_fkey"
            columns: ["property_type"]
            referencedRelation: "property_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_form_province_fkey"
            columns: ["province"]
            referencedRelation: "provinsi"
            referencedColumns: ["id"]
          }
        ]
      }
      review: {
        Row: {
          contractor_id: string | null
          created_at: string
          description: string
          design_id: string | null
          designer_id: string | null
          id: number
          rating: number | null
          title: string
          transaction_id: string | null
        }
        Insert: {
          contractor_id?: string | null
          created_at?: string
          description?: string
          design_id?: string | null
          designer_id?: string | null
          id?: number
          rating?: number | null
          title?: string
          transaction_id?: string | null
        }
        Update: {
          contractor_id?: string | null
          created_at?: string
          description?: string
          design_id?: string | null
          designer_id?: string | null
          id?: number
          rating?: number | null
          title?: string
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "review_contractor_id_fkey"
            columns: ["contractor_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "review_design_id_fkey"
            columns: ["design_id"]
            referencedRelation: "design"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "review_designer_id_fkey"
            columns: ["designer_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "review_transaction_id_fkey"
            columns: ["transaction_id"]
            referencedRelation: "transaction"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          id: number
          role_name: string | null
        }
        Insert: {
          id?: number
          role_name?: string | null
        }
        Update: {
          id?: number
          role_name?: string | null
        }
        Relationships: []
      }
      transaction: {
        Row: {
          created_at: string
          id: string
          img: string
          name: string
          price_estimated: number
          property_type: string
          status: string
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          img?: string
          name?: string
          price_estimated?: number
          property_type?: string
          status?: string
          type?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          img?: string
          name?: string
          price_estimated?: number
          property_type?: string
          status?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      transaction_contributor: {
        Row: {
          client_id: string | null
          contractor_id: string | null
          created_at: string
          designer_id: string | null
          id: string
          transaction_id: string
        }
        Insert: {
          client_id?: string | null
          contractor_id?: string | null
          created_at?: string
          designer_id?: string | null
          id?: string
          transaction_id: string
        }
        Update: {
          client_id?: string | null
          contractor_id?: string | null
          created_at?: string
          designer_id?: string | null
          id?: string
          transaction_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transaction_contributor_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_contributor_contractor_id_fkey"
            columns: ["contractor_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_contributor_designer_id_fkey"
            columns: ["designer_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_contributor_transaction_id_fkey"
            columns: ["transaction_id"]
            referencedRelation: "transaction"
            referencedColumns: ["id"]
          }
        ]
      }
      transaction_status: {
        Row: {
          action_type: string[]
          contract: string
          contractor_id: string | null
          created_at: string
          created_by: string
          description: string
          extra_info: string
          id: string
          isConfirmed: boolean
          isPaid: boolean
          media: string
          payment: number | null
          title: string
          transaction_id: string | null
          updated_at: string | null
        }
        Insert: {
          action_type?: string[]
          contract?: string
          contractor_id?: string | null
          created_at?: string
          created_by?: string
          description?: string
          extra_info?: string
          id?: string
          isConfirmed?: boolean
          isPaid?: boolean
          media?: string
          payment?: number | null
          title?: string
          transaction_id?: string | null
          updated_at?: string | null
        }
        Update: {
          action_type?: string[]
          contract?: string
          contractor_id?: string | null
          created_at?: string
          created_by?: string
          description?: string
          extra_info?: string
          id?: string
          isConfirmed?: boolean
          isPaid?: boolean
          media?: string
          payment?: number | null
          title?: string
          transaction_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_status_contractor_id_fkey"
            columns: ["contractor_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_status_transaction_id_fkey"
            columns: ["transaction_id"]
            referencedRelation: "transaction"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_design_permission: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      check_request_form_permission: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      fetch_and_find_property_types: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string
        }[]
      }
      get_current_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_role_name_by_id: {
        Args: {
          role_id: number
        }
        Returns: string
      }
      get_user_role_name: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      insert_education: {
        Args: {
          data_to_insert: Json
        }
        Returns: undefined
      }
      insert_member_contractors: {
        Args: {
          data_to_insert: Json
        }
        Returns: undefined
      }
      insert_projects: {
        Args: {
          data_to_insert: Json
        }
        Returns: undefined
      }
    }
    Enums: {
      app_permission: "channels.delete" | "messages.delete"
      app_role: "admin" | "moderator"
      user_status: "ONLINE" | "OFFLINE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
