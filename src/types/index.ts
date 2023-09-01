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
      kabupaten_kota: {
        Row: {
          id: number
          id_provinsi: number | null
          kabupaten: string | null
        }
        Insert: {
          id: number
          id_provinsi?: number | null
          kabupaten?: string | null
        }
        Update: {
          id?: number
          id_provinsi?: number | null
          kabupaten?: string | null
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
          city: number | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          property_style: number[] | null
          property_type: number[] | null
          province: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          city?: number | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          property_style?: number[] | null
          property_type?: number[] | null
          province?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          city?: number | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          property_style?: number[] | null
          property_type?: number[] | null
          province?: number | null
          updated_at?: string | null
          user_id?: string | null
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
          last_name: string | null
          role_id: number
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role_id?: number
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role_id?: number
          updated_at?: string | null
          username?: string | null
          website?: string | null
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
      property_style: {
        Row: {
          id: number
          style_name: string | null
        }
        Insert: {
          id?: number
          style_name?: string | null
        }
        Update: {
          id?: number
          style_name?: string | null
        }
        Relationships: []
      }
      property_type: {
        Row: {
          id: number
          type_name: string | null
        }
        Insert: {
          id?: number
          type_name?: string | null
        }
        Update: {
          id?: number
          type_name?: string | null
        }
        Relationships: []
      }
      provinsi: {
        Row: {
          id: number
          provinsi: string | null
        }
        Insert: {
          id: number
          provinsi?: string | null
        }
        Update: {
          id?: number
          provinsi?: string | null
        }
        Relationships: []
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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
